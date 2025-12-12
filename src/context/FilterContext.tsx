import { createContext } from "react";
import type { FilterContextType } from "@/types/FillterContext";

export const FilterContext = createContext<FilterContextType>({
  selectedCategories: [],
  selectedAuthors: [],
  searchText: "",
  sortBy: "newest",

  toggleCategory: () => {},
  toggleAuthor: () => {},
  setSearch: () => {},
  setSort: () => {}
});