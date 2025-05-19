import { imageSources } from "@/config/constants";
import { AwaitedPageProps } from "@/config/types";
import React from "react";
import { HomepageTaxonomyFilters } from "./homepage-filters";
import { SearchButton } from "./search-button";
import { imgixLoader } from "@/lib/imgix-loader";
import { prisma } from "@/lib/prisma";
import { buildClassifiedFilterQuery } from "@/lib/utils";
import { Button } from "../ui/button";
import { routes } from "@/config/routes";
import Link from "next/link";
import { ClassifiedStatus } from "../../../prisma/src/generated/prisma";

export const HeroSection = async (props: AwaitedPageProps) => {
    const {searchParams} = props;
    const totalFilterApplied = Object.keys(searchParams || {}).length
    const isFilterApplied = totalFilterApplied > 0;

    const classifiedsCount = await prisma.classified.count({
      where: buildClassifiedFilterQuery(searchParams)
    });

      const minMaxVResult = await prisma.classified.aggregate({
        where: { status: ClassifiedStatus.DRAFT },
        _min: {
          year: true,
          price: true,
          odoReading:true
         
        },
        _max: {
          year: true,
          price: true,
          odoReading:true
         
        },
      });


    return (
        <div>      <section
                className="relative flex items-center justify-center h-[calc(100vh-4rem)] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${imgixLoader({
                    src: imageSources.carLinup,
                    width: 120,
                    quality: 100,
                  })})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="container lg:grid space-y-12 grid-cols-2 items-center relative z-10">
                  <div className="px-10 lg:px-0">
                    <h1 className="text-3xl text-center md:text-5xl lg:text-7xl uppercase font-extrabold text-white">
                      🚗 Drive Your Dream – At Unbeatable Prices! 💸
                    </h1>
                    <h2 className="mt-4 text-center lg:text-left text-lg md:text-2xl lg:text-3xl text-white font-medium">
                      💥 New & Used Cars With Massive Savings! 🏁
                    </h2>
                    <p className="mt-4 text-center lg:text-left text-white text-base md:text-lg">
                      🌟 Find your perfect ride with our easy-to-use filters and instant search. Your next adventure starts here! ✨
                    </p>
                  </div>
                  <div className="max-w-md w-full mx-auto p-6 bg-white sm:rounded-xl shadow-lg">
                    <div className="space-y-4">
                      <div className="space-y-2 flex flex-col w-full gap-x-4">
                        <HomepageTaxonomyFilters 
                        minMaxValues={minMaxVResult}
                        searchParams={searchParams} />
                      </div>
                      <SearchButton count={classifiedsCount}/>
                      {isFilterApplied && (
                        <Button
                        asChild
                        variant='outline'
                        className="w-full hover:bg-slate-200"
                        >
                          <Link href={routes.home}>
                          Clear Filters ({totalFilterApplied})
                          </Link>

                        </Button>
                      )}

                    </div>
                  </div>
                </div>
              </section></div>
    )
}