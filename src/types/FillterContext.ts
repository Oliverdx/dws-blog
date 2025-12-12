export interface FilterContextValues {
  selectedCategories: string[];
  selectedAuthors: string[];
  searchText: string | null;
  sortBy: "newest" | "oldest";
}

export interface FilterContextType extends FilterContextValues {
  toggleCategory: (category: string) => void;
  toggleAuthor: (author: string) => void;
  setSearch: (text: string | null) => void;
  setSort: (sort: "newest" | "oldest") => void;
}