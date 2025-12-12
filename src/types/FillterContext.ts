export interface FilterContextValues {
    selectedCategory: string | null,
    selectedAuthor: string | null,
    searchText: string | null,
    sortBy: "newest" | "oldest";
}

export interface FilterContextType extends FilterContextValues {
  setCategory: (category: string | null) => void,
  setAuthor: (author: string | null) => void,
  setSearch: (search: string) => void,
  setSort: (sort: "newest" | "oldest") => void,
  cleanFilters: () => void;
}
