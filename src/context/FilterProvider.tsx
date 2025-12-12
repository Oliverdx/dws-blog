import { useState, useMemo, type ReactNode } from "react";
import { FilterContext } from "./FilterContext";
import type { filterItem } from "@/hooks/useFetchFilterList";
import type { FilterContextValues } from "@/types/FillterContext";
interface FilterProviderProps {
  children: ReactNode;
}

const initialFilters: FilterContextValues = {
  selectedCategories: [],
  selectedAuthors: [],
  searchText: null,
  sortBy: "newest",
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState(initialFilters);

  const toggleCategory = (category: filterItem) =>
    setFilters(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter(item => item !== category)
        : [...prev.selectedCategories, category],
    }));

  const toggleAuthor = (author: filterItem) =>
    setFilters(prev => ({
      ...prev,
      selectedAuthors: prev.selectedAuthors.includes(author)
        ? prev.selectedAuthors.filter(item => item.id !== author.id)
        : [...prev.selectedAuthors, author],
    }));

  const setSearch = (text: string | null) =>
    setFilters(prev => ({ ...prev, searchText: text }));

  const setSort = (sort: "newest" | "oldest") =>
    setFilters(prev => ({ ...prev, sortBy: sort }));

  const value = useMemo(
    () => ({
      ...filters,
      toggleCategory,
      toggleAuthor,
      setSearch,
      setSort
    }),
    [filters]
  );

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
