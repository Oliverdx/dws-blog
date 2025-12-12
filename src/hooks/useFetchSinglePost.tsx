import { getPostById } from '@/services/getPosts';
import { useState, useEffect } from 'react';

import type { Post } from '@/types/Post';

const useFetchSinglePost = (id: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchPosts = async () => {
      setLoading(true);

      try{
        const data = await getPostById(id);
        if(mounted) setPost(data);
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
  }, [id]);

  return {
    post,
    loading,
    error
  }
};

export {
  useFetchSinglePost
}