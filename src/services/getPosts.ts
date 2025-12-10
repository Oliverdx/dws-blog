import type { Post } from "@/types/Post";

const API_URL = import.meta.env.VITE_API_URL;

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${API_URL}/posts`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();
  return data;
}

export async function getPostById(id: string): Promise<Post | null> {
  const response = await fetch(`${API_URL}/posts/${id}`);

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
}