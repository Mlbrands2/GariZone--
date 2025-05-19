import type { filterOptions } from "@/config/types";
import { SelectHTMLAttributes } from "react";

interface SelectType extends SelectHTMLAttributes<HTMLSelectElement> {
  options: filterOptions<string, number>;
}

interface RangeSelectProps {
  label: string;
  minSelect: SelectType;
  maxSelect: SelectType;
}

export const RangeSelect = ({ label, minSelect, maxSelect }: RangeSelectProps) => {
  return (
    <>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <div className="flex gap-2">
        <select
          {...minSelect}
          className="flex-1 w-full pl-3 py-2 rounded-md border border-gray-300 bg-white appearance-none pr-12"
        >
          <option value="">Min</option>
          {minSelect.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          {...maxSelect}
          className="flex-1 w-full pl-3 py-2 rounded-md border border-gray-300 bg-white appearance-none pr-12"
        >
          <option value="">Max</option>
          {maxSelect.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
