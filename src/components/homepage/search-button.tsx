"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { parseAsString, useQueryStates } from "nuqs"
import { routes } from "@/config/routes"
import { env } from "@/env"

export const SearchButton = ({ count }: { count: number }) => {
    const [{ make, model, modelVariant, minYear, maxYear, minPrice, maxPrice }] = useQueryStates({
        make: parseAsString.withDefault(""),
        model: parseAsString.withDefault(""),
        modelVariant: parseAsString.withDefault(""),
        minYear: parseAsString.withDefault(""),
        maxYear: parseAsString.withDefault(""),
        minPrice: parseAsString.withDefault(""),
        maxPrice: parseAsString.withDefault(""),
    }, { shallow: false });

    const queryParams = new URLSearchParams();

    if (make) queryParams.append("make", make);
    if (model) queryParams.append("make", model);
    if (modelVariant) queryParams.append("modelVariantt", modelVariant);
    if (minYear) queryParams.append("minYear", minYear);
    if (maxYear) queryParams.append("maxYear", maxYear);
    if (minPrice) queryParams.append("minPrice", minPrice);
    if (maxPrice) queryParams.append("maxPrice", maxPrice);

    const url = new URL(routes.inventory, env.NEXT_PUBLIC_APP_URL)
    url.search = queryParams.toString();



    return (
        <Button className="w-full text-lg font-bold" asChild>
            <Link href={url.toString()}>🔍 Search Now {count > 0 ? `(${count})` : null}</Link>
        </Button>
    )
}