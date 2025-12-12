import { useState, useMemo, type ReactNode } from "react";
import { FilterContext } from "./FilterContext";
interface FilterProviderProps {
  children: ReactNode;
}

const initialFilters = {
  selectedCategories: [] as string[],
  selectedAuthors: [] as string[],
  searchText: null as string | null,
  sortBy: "newest" as "newest" | "oldest",
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState(initialFilters);

  const toggleCategory = (category: string) =>
    setFilters(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter(c => c !== category)
        : [...prev.selectedCategories, category],
    }));

  const toggleAuthor = (author: string) =>
    setFilters(prev => ({
      ...prev,
      selectedAuthors: prev.selectedAuthors.includes(author)
        ? prev.selectedAuthors.filter(a => a !== author)
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
