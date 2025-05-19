"use client";

import type { AwaitedPageProps, filterOptions, TaxonomyFiltersProps } from "@/config/types";
import { useEffect, useState } from "react";
import { Select } from "../ui/select";
import { endpoints } from "@/config/endpoints";
import { api } from "@/lib/api-client";

export const TaxonomyFilters = (props: TaxonomyFiltersProps) => {
  const { searchParams, handleChange } = props;

  // States for storing filter options
  const [makes, setMakes] = useState<filterOptions<string, string>>([]);
  const [models, setModels] = useState<filterOptions<string, string>>([]);
  const [modelVariants, setModelVariants] = useState<filterOptions<string, string>>([]);

  useEffect(() => {
    // Fetch filter options
    const fetchMakesOptions = async () => {
      try {
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(searchParams as Record<string, string>)) {
          if (value) params.set(key, value);
        }

        const url = new URL(endpoints.taxonomy, window.location.href);
        url.search = params.toString();

        const data = await api.get<{
          makes: filterOptions<string, string>;
          models: filterOptions<string, string>;
          modelVariants: filterOptions<string, string>;
        }>(url.toString());

        setMakes(data.makes);
        setModels(data.models);
        setModelVariants(data.modelVariants);
      } catch (error) {
        console.error("Failed to fetch taxonomy options:", error);
      }
    };

    fetchMakesOptions();
  }, [searchParams]);

  return (
    <>
      <Select 
        label="Make" 
        name="make" 
        value={searchParams?.make as string} 
        onChange={handleChange} 
        options={makes} 
      />

      <Select 
        label="Model" 
        name="model" 
        value={searchParams?.model as string} 
        onChange={handleChange} 
        options={models}
        disabled={!models.length} 
      />

      <Select 
        label="Model Variant" 
        name="modelVariant" 
        value={searchParams?.modelVariant as string} 
        onChange={handleChange} 
        options={modelVariants}
        disabled={!modelVariants.length} 
      />
    </>
  );
};
