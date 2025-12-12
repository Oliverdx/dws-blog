import { getPosts } from '@/services/getPosts';
import { useState, useEffect } from 'react';

import type { Post } from '@/types/Post';

const useFetchPosts = (qtd?: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = async () => {
      setLoading(true);

      try{
        const data = await getPosts();
        if(mounted){
          const postList = qtd ? data.slice(0, qtd) : data;
          setPosts(postList);
        }
      }catch{
        if(mounted) setError('Failed to load the posts from API');
      }finally{
        if(mounted) setLoading(false);
      }
    }

    fetchPosts();

    return () => {
      mounted = false;
    }
  }, [qtd]);

  return {
    posts,
    loading,
    error
  }
};

export {
  useFetchPosts
}