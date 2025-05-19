import { routes } from "@/config/routes";
import { Favourites } from "@/config/types";
import { redis } from "@/lib/redis-store";
import { setSourceId } from "@/lib/source-id";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const validateIdSchema = z.object({
  id: z.number().int(),
});

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const parsed = validateIdSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.message }, { status: 400 });
    }

    const { id } = parsed.data;

    const sourceId = await setSourceId();
    if (!sourceId) {
      return NextResponse.json({ error: "Source ID is undefined" }, { status: 400 });
    }

    const storedFavourites = await redis.get<Favourites>(sourceId);
    const favourites: Favourites = storedFavourites || { ids: [] };

    if (favourites.ids.includes(id)) {
      favourites.ids = favourites.ids.filter((favId) => favId !== id);
    } else {
      favourites.ids.push(id);
    }

    await redis.set(sourceId, favourites);
    revalidatePath(routes.favourites);

    return NextResponse.json({ ids: favourites.ids }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error", details: String(error) }, { status: 500 });
  }
};
