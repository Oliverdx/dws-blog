import type { FilterContextValues } from "@/types/FillterContext";
import { useMemo, useState, type ReactNode } from "react";
import { FilterContext } from "./filtercontext";

interface FilterProviderProps {
  children: ReactNode;
}

const initialFilters: FilterContextValues = {
  selectedCategory: null,
  selectedAuthor: null,
  searchText: null,
  sortBy: "newest",
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState<FilterContextValues>(initialFilters);

  const cleanFilters = () => {
    setFilters(initialFilters);
  }

  const setCategory = (category: string | null) =>
    setFilters(prev => ({ ...prev, selectedCategory: category }));

  const setAuthor = (author: string | null) =>
    setFilters(prev => ({ ...prev, selectedAuthor: author }));

  const setSearch = (text: string) =>
    setFilters(prev => ({ ...prev, searchText: text }));

  const setSort = (sort: "newest" | "oldest") =>
    setFilters(prev => ({ ...prev, sortBy: sort }));

  const value = useMemo(
    () => ({
      ...filters,
      setCategory,
      setAuthor,
      setSearch,
      setSort,
      cleanFilters,
    }),
    [filters]
  );

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );

}