import { filterOptions, TaxonomyFiltersProps } from "@/config/types";
import { CurrencyCode } from "../../../prisma/src/generated/prisma";
import { RangeSelect } from "../ui/range-select";
import { useEffect, useState } from "react";
import { formatNumber, formatPrice } from "@/lib/utils";

interface RangeFilterProps extends TaxonomyFiltersProps {
    label: string;
    minName: string;
    maxName: string;
    defaultMin: number;
    defaultMax: number;
    increment?: number;
    thousandSeparator?: boolean;
    currency?: {
        currencyCode: CurrencyCode;
    };
}

export const RangeFilter = (props: RangeFilterProps) => {
    const {
        label,
        minName,
        maxName,
        defaultMin,
        defaultMax,
        increment,
        thousandSeparator,
        currency,
        handleChange,
        searchParams,
    } = props;

    const getInitialState = () => {
        const state: filterOptions<string, number> = [];
        let iterator = defaultMin - (increment ?? 1);

        do {
            if (increment) {
                iterator += increment;
            } else {
                iterator += 1;
            }

            if (currency) {
                state.push({
                    label: formatPrice({
                        price: iterator,
                        currency: currency.currencyCode,
                    }),
                    value: iterator,
                });
            } else if (thousandSeparator) {
                state.push({
                    label: formatNumber(iterator),
                    value: iterator,
                });
            } else {
                state.push({
                    label: iterator.toString(),
                    value: iterator,
                });
            }

        } while (iterator < defaultMax);

        return state;
    };

    const initialState = getInitialState();

    const [minOptions, setMinOptions] = useState<filterOptions<string, number>>(
        initialState
    );
    const [maxOptions, setMaxOptions] = useState<filterOptions<string, number>>(
        initialState.slice().reverse()
    );

    useEffect(() => {
        if (searchParams?.[minName]) {
            setMaxOptions(
                initialState.filter(
                    ({ value }) => value > Number(searchParams?.[maxName])
                )
            );
        }
        if (searchParams?.[maxName]) {
            setMinOptions(
                initialState.filter(
                    ({ value }) => value < Number(searchParams?.[minName])
                )
            );
        }
    }, [searchParams?.[minName], searchParams?.[maxName]]);

    return (
        <RangeSelect
            label={label}
            minSelect={{
                name: minName,
                value: Number(searchParams?.[minName]) || "",
                onChange: handleChange,
                options: minOptions,
            }}
            maxSelect={{
                name: maxName,
                value: Number(searchParams?.[maxName]) || "",
                onChange: handleChange,
                options: maxOptions,
            }}
        />
    );
};
