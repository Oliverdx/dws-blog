import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useFetchPosts } from '@/hooks/useFetchPosts';

import { FilterProvider } from '@/context/FilterProvider';

import AppLayout from '@/components/Layout/AppLayout';
import PostCard from '@/components/PostCard/PostCard';
import ActionBar from '@/components/ActionBar/ActionBar';

import type { Post } from "@/types/Post";

const Home = memo(() => {
  const { posts , loading, error } = useFetchPosts();

  if (error) return <p>{error}</p>;

  return (
    <FilterProvider>
      <AppLayout>
        {loading ? <>Loading...</> : <div className={`wrapper`}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
          <ActionBar />
          {posts?.map((post: Post) => 
          <Link to={`post/${post.id}`} key={post.id}>
            <PostCard data={post} />
          </Link>)}
        </div>}
      </AppLayout>
    </FilterProvider>
  );
});

export default Home;