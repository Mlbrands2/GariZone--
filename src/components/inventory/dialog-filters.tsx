"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Settings2 } from "lucide-react";
import { Button } from "../ui/button";
import { SearchInput } from "../shared/search-input";
import { TaxonomyFilters } from "./taxonomy-filters";
import { RangeFilter } from "./range-filters";
import { Select } from "../ui/select";

import type { SidebarProps } from "@/config/types";
import { useQueryStates, parseAsString } from "nuqs";
import { routes } from "@/config/routes";
import { env } from "@/env";
import {
  cn,
  formatBodyType,
  formatColour,
  formatFuelType,
  formatOdometerUnit,
  formatTransmission,
  formatUlezCompliance,
} from "@/lib/utils";
import {
  BodyType,
  Colour,
  CurrencyCode,
  FuelType,
  OdoUnit,
  Transmission,
  ULEZCompliance,
} from "../../../prisma/src/generated/prisma";

interface DialogFiltersProps extends SidebarProps {
  count: number;
}

export const DialogFilters = (props: DialogFiltersProps) => {
  const { minMaxValues, searchParams, count } = props;
  const { _min, _max } = minMaxValues;

  const [open, setIsOpen] = useState(false);
  const router = useRouter();
  const [filterCount, setFilterCount] = useState(0);

  const [queryStates, setQueryStates] = useQueryStates(
    {
      make: parseAsString.withDefault(""),
      model: parseAsString.withDefault(""),
      modelVariant: parseAsString.withDefault(""),
      minYear: parseAsString.withDefault(""),
      maxYear: parseAsString.withDefault(""),
      minPrice: parseAsString.withDefault(""),
      maxPrice: parseAsString.withDefault(""),
      minReading: parseAsString.withDefault(""),
      maxReading: parseAsString.withDefault(""),
      currency: parseAsString.withDefault(""),
      OdoUnit: parseAsString.withDefault(""),
      transmission: parseAsString.withDefault(""),
      fuelType: parseAsString.withDefault(""),
      bodyType: parseAsString.withDefault(""),
      colour: parseAsString.withDefault(""),
      doors: parseAsString.withDefault(""),
      seats: parseAsString.withDefault(""),
      ulezCompliance: parseAsString.withDefault(""),
    },
    { shallow: false }
  );

  useEffect(() => {
    const activeFilters = Object.entries(searchParams as Record<string, string>)
      .filter(([key, value]) => key !== "page" && value).length;

    setFilterCount(activeFilters);
  }, [searchParams]);

  const clearFilters = () => {
    const baseUrl = env.NEXT_PUBLIC_APP_URL;
    if (!baseUrl) return console.error("Missing NEXT_PUBLIC_APP_URL in env");
    const url = new URL(routes.inventory, baseUrl);
    router.replace(url.toString());
    setFilterCount(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    const updated = { [name]: value || null };

    if (name === "make") {
      Object.assign(updated, { model: null, modelVariant: null });
    }

    setQueryStates(updated);
    router.refresh();
  };

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Settings2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] h-[90vh] overflow-y-auto rounded-xl">
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <DialogTitle className="text-slate-700 text-lg font-semibold tracking-tight">
              Filters
            </DialogTitle>
          </div>

          <div className="p-4">
            <SearchInput
              placeholder="Search by make, model, etc."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            />
          </div>

          <div className="p-4 space-y-2">
            <TaxonomyFilters searchParams={searchParams} handleChange={handleChange} />
          </div>

          <RangeFilter
            label="Year"
            minName="minYear"
            maxName="maxYear"
            defaultMin={_min.year || 1925}
            defaultMax={_max.year || new Date().getFullYear()}
            handleChange={handleChange}
            searchParams={searchParams}
          />

          <RangeFilter
            label="Price"
            minName="minPrice"
            maxName="maxPrice"
            defaultMin={_min.price || 0}
            defaultMax={_max.price || 21474836}
            handleChange={handleChange}
            searchParams={searchParams}
            increment={1000000}
            thousandSeparator
            currency={{ currencyCode: "TZS" }}
          />

          <RangeFilter
            label="Odometer Reading"
            minName="minReading"
            maxName="maxReading"
            defaultMin={_min.odoReading || 0}
            defaultMax={_max.odoReading || 1000000}
            handleChange={handleChange}
            searchParams={searchParams}
            increment={5000}
            thousandSeparator
          />

          <Select
            label="Currency"
            name="currency"
            value={queryStates.currency || ""}
            onChange={handleChange}
            options={Object.values(CurrencyCode).map(value => ({ label: value, value }))}
          />

          <Select
            label="Odometer Unit"
            name="OdoUnit"
            value={queryStates.OdoUnit || ""}
            onChange={handleChange}
            options={Object.values(OdoUnit).map(value => ({ label: formatOdometerUnit(value), value }))}
          />

          <Select
            label="Transmission"
            name="transmission"
            value={queryStates.transmission || ""}
            onChange={handleChange}
            options={Object.values(Transmission).map(value => ({ label: formatTransmission(value), value }))}
          />

          <Select
            label="Fuel Type"
            name="fuelType"
            value={queryStates.fuelType || ""}
            onChange={handleChange}
            options={Object.values(FuelType).map(value => ({ label: formatFuelType(value), value }))}
          />

          <Select
            label="Body Type"
            name="bodyType"
            value={queryStates.bodyType || ""}
            onChange={handleChange}
            options={Object.values(BodyType).map(value => ({ label: formatBodyType(value), value }))}
          />

          <Select
            label="Colour"
            name="colour"
            value={queryStates.colour || ""}
            onChange={handleChange}
            options={Object.values(Colour).map(value => ({ label: formatColour(value), value }))}
          />

          <Select
            label="ULEZ Compliance"
            name="ulezCompliance"
            value={queryStates.ulezCompliance || ""}
            onChange={handleChange}
            options={Object.values(ULEZCompliance).map(value => ({ label: formatUlezCompliance(value), value }))}
          />

          <Select
            label="Doors"
            name="doors"
            value={queryStates.doors || ""}
            onChange={handleChange}
            options={Array.from({ length: 6 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }))}
          />

          <Select
            label="Seats"
            name="seats"
            value={queryStates.seats || ""}
            onChange={handleChange}
            options={Array.from({ length: 8 }, (_, i) => ({ label: `${i + 1}`, value: `${i + 1}` }))}
          />

          <div className="flex flex-col space-y-2">
            <Button type="button" onClick={() => setIsOpen(false)} className="w-full">
              Search {count > 0 ? `(${count})` : ""}
            </Button>

            {filterCount > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={clearFilters}
                className={cn(
                  "text-sm py-1",
                  !filterCount ? "disabled opacity-50 pointer-events-none cursor-default" : "hover:underline"
                )}
              >
                Clear all {`(${filterCount})`}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
