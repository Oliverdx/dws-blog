import type { filterItem } from "@/hooks/useFetchFilterList";

export interface FilterContextValues {
  selectedCategories: filterItem[];
  selectedAuthors: filterItem[];
  searchText: string | null;
  sortBy: "newest" | "oldest";
}

export interface FilterContextType extends FilterContextValues {
  toggleCategory: (category: filterItem) => void;
  toggleAuthor: (author: filterItem) => void;
  setSearch: (text: string | null) => void;
  setSort: (sort: "newest" | "oldest") => void;
}