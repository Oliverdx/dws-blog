import type { Category } from "./Category";
import type { Author } from "./Author";

export interface Post {
  id: string,
  title: string,
  content: string,
  thumbnail_url: string,
  authorId: string,
  createdAt: string,
  updatedAt: string,
  categories: Array<Category>,
  author: Author,
}