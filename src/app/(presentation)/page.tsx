import { FeaturesSection } from "@/components/homepage/features-section";
import { HeroSection } from "@/components/homepage/hero-section";
import { HomepageTaxonomyFilters } from "@/components/homepage/homepage-filters";
import { LatestArrivals } from "@/components/homepage/latest-arrivals";
import { OurBrandsSection } from "@/components/homepage/our-brands-section";
import { SearchButton } from "@/components/homepage/search-button";
import { Button } from "@/components/ui/button";
import { imageSources } from "@/config/constants";
import { PageProps } from "@/config/types";
import { imgixLoader } from "@/lib/imgix-loader";
import Image from "next/image";
import Link from "next/link";

export default async function Home(props: PageProps) {
  const searchParams = await props.searchParams;

  return (
    <div className="w-full min-h-screen bg-background">
     <HeroSection searchParams={searchParams} />
     <FeaturesSection />
     <LatestArrivals />
     <OurBrandsSection />
    </div>
  );
}
