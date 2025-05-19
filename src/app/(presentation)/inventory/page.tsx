import { ClassifiedCard } from "@/components/inventory/classified-card";
import { ClassifiedsList } from "@/components/inventory/classified-list";
import { CustomPagination } from "@/components/shared/custom-pagination";
import { CLASSIFIEDS_PER_PAGE } from "@/config/constants";
import { routes } from "@/config/routes";
import { Favourites } from "@/config/types";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis-store";
import { getSourceId } from "@/lib/source-id";
import { z } from "zod";
import { Sidebar } from "@/components/inventory/sidebar";
import { ClassifiedStatus, Prisma } from "../../../../prisma/src/generated/prisma";
import { DialogFilters } from "@/components/inventory/dialog-filters";
import { ClassifiedFilterSchema } from "@/app/schemas/classified.schema";
import { pageSchema } from "@/app/schemas/page.schema";

type InventoryPageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const buildClassifiedFilterQuery = (
  searchParams: InventoryPageProps["searchParams"]
): Prisma.ClassifiedWhereInput => {
  const result = ClassifiedFilterSchema.safeParse(searchParams);
  if (!result.success) {
    return { status: ClassifiedStatus.DRAFT };
  }

  const data = result.data;
  const keys = Object.keys(data);

  const TaxonomyFilters = ["make", "model", "modelVariant"];
  const RangeFilters = {
    minYear: "year",
    maxYear: "year",
    minPrice: "price",
    maxPrice: "price",
    minReading: "odoReading",
    maxReading: "odoReading",
  };
  const numFilters = ["seats", "doors"];
  const enumFilters = ["odoUnit", "currency", "transmission", "bodyType", "fuelType", "colour", "ulezCompliance"];

  const mapParamsToFields = keys.reduce((acc, key) => {
    const value = searchParams?.[key] as string | undefined;
    if (!value) return acc;

    if (TaxonomyFilters.includes(key)) {
      acc[key] = { id: Number(value) };
    } else if (enumFilters.includes(key)) {
      acc[key] = value.toUpperCase();
    } else if (numFilters.includes(key)) {
      acc[key] = Number(value);
    } else if (key in RangeFilters) {
      const field = RangeFilters[key as keyof typeof RangeFilters];
      acc[field] = acc[field] || {};
      if (key.startsWith("min")) {
        acc[field].gte = Number(value);
      } else if (key.startsWith("max")) {
        acc[field].lte = Number(value);
      }
    }

    return acc;
  }, {} as { [key: string]: any });

  return {
    status: ClassifiedStatus.DRAFT,
    ...mapParamsToFields,
    ...(typeof searchParams?.q === "string" && {
      OR: [
        {
          title: {
            contains: searchParams.q,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: searchParams.q,
            mode: "insensitive",
          },
        },
      ],
    }),
  };
};

const getInventory = async (searchParams: InventoryPageProps["searchParams"]) => {
  const validPage = pageSchema.parse(searchParams?.page);
  const page = validPage ? validPage : 1;
  const offset = (page - 1) * CLASSIFIEDS_PER_PAGE;

  return prisma.classified.findMany({
    where: buildClassifiedFilterQuery(searchParams),
    include: { images: { take: 1 } },
    skip: offset,
    take: CLASSIFIEDS_PER_PAGE,
  });
};

export default async function InventoryPage({ searchParams }: InventoryPageProps) {
  const classifieds = await getInventory(searchParams);
  const count = await prisma.classified.count({
    where: buildClassifiedFilterQuery(searchParams),
  });

  const minMaxVResult = await prisma.classified.aggregate({
    where: { status: ClassifiedStatus.DRAFT },
    _min: {
      year: true,
      price: true,
      odoReading: true,
    },
    _max: {
      year: true,
      price: true,
      odoReading: true,
    },
  });

  const sourceId = await getSourceId();
  const favourites = await redis.get<Favourites>(sourceId ?? "");
  const totalPages = Math.ceil(count / CLASSIFIEDS_PER_PAGE);

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar minMaxValues={minMaxVResult} searchParams={searchParams} />

      <div className="flex-1 p-6 bg-white rounded-tl-2xl shadow-inner">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <h2 className="text-slate-700 text-lg md:text-xl font-semibold">
              We have found {count} classifieds...
            </h2>

            <DialogFilters
              minMaxValues={minMaxVResult}
              count={count}
              searchParams={searchParams}
            />

            <CustomPagination
              baseURL={routes.inventory}
              totalPages={totalPages}
              maxVisiblePages={7}
              styles={{
                paginationRoot: "flex justify-center lg:block hidden",
                paginationPrevious: "",
                paginationNext: "",
                paginationLink: "text-slate-700 hover:text-slate-900 font-medium px-2",
                paginationLinkActive: "text-white bg-slate-700 rounded px-2",
              }}
            />
          </div>

          <div className="bg-slate-50 p-4 rounded-lg shadow-sm"></div>

          <ClassifiedsList
            classifieds={classifieds}
            favourites={favourites ? favourites.ids : []}
          />

          <CustomPagination
            baseURL={routes.inventory}
            totalPages={totalPages}
            maxVisiblePages={7}
            styles={{
              paginationRoot: "justify-center lg:hidden pt-12",
              paginationPrevious: "",
              paginationNext: "",
              paginationLink:
                "border-none active:border text-slate-700 hover:text-slate-900 font-medium px-2",
              paginationLinkActive: "text-white bg-slate-700 rounded px-2",
            }}
          />
        </div>
      </div>
    </div>
  );
}
