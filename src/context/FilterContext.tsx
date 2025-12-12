import { createContext } from "react";
import type { FilterContextType } from "@/types/FillterContext";

export const FilterContext = createContext<FilterContextType>({
  selectedCategory: null,
  selectedAuthor: null,
  searchText: "",
  sortBy: "newest",

  setCategory: () => {},
  setAuthor: () => {},
  setSearch: () => {},
  setSort: () => {},
  cleanFilters: () => {},
});