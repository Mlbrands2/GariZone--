import { pageSchema } from "@/app/schemas/page.schema";
import { CLASSIFIEDS_PER_PAGE } from "@/config/constants";
import { Favourites, PageProps } from "@/config/types";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis-store";
import { getSourceId } from "@/lib/source-id";
import { ClassifiedCard } from "../inventory/classified-card";

export default async function FavouritesPage(props: PageProps) {
    const searchParams = await props.searchParams;
    const validPage = pageSchema.parse(searchParams?.page);
    const page = validPage ? validPage : 1;
    const offset = (page - 1) * CLASSIFIEDS_PER_PAGE;
    const sourceId = await getSourceId();
    const favourites = await redis.get<Favourites>(sourceId ?? "");
    const classifieds = await prisma.classified.findMany({
        where: { id: {in:favourites ? favourites.ids : []}},
        include: { images: { take: 1 } },
        skip: offset,
        take: CLASSIFIEDS_PER_PAGE,
    });



    const count = await prisma.classified.count({
        where: { id: {in:favourites ? favourites.ids : []}},
    });

    
    const totalPages = Math.ceil(count / CLASSIFIEDS_PER_PAGE);
    return 
    <div className="container mx-auto px-4 py-8 min-h-[80dvh]">
      
      <h1 className="text-3xl font-bold mb-6">Your Favourite classifieds</h1>
      <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {classifieds.map((classified)=>
        {
            return(
                <ClassifiedCard 
                key={classified.id}
                classified={classified}
                favourites={favourites ? favourites.ids : []}
                />
            )
        }) }
        </div>
    </div>
}