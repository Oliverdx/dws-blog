import type { Author } from "@/types/Author";
import type { Category } from "@/types/Category";

const API_URL = import.meta.env.VITE_API_URL;

export type filterBy = 'category' | 'author';

const FILTER_ENDPOINTS = {
  category: "categories",
  author: "authors"
}

export async function getFilterList(filterBy: filterBy): Promise<Author[] | Category[]> {
  const response = await fetch(`${API_URL}/${FILTER_ENDPOINTS[filterBy]}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch the ${filterBy} category`);
  }

  const data = await response.json();
  return data;
}