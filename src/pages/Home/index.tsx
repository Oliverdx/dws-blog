import AppLayout from '@/components/Layout/AppLayout';

import { useFetchPosts } from '@/hooks/useFetchPosts';
import PostCard from '@/components/PostCard/PostCard';

import type { Post } from "@/types/Post";
import ActionBar from '@/components/ActionBar/ActionBar';
import { memo } from 'react';
import { Link } from 'react-router-dom';
const Home = memo(() => {
  const { posts , loading, error } = useFetchPosts();

  if (error) return <p>{error}</p>;

  return (
    <AppLayout>
      {loading ? <>Loading...</> : <div className={`wrapper`}
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
        <ActionBar />
        {posts?.map((post: Post) => 
        <Link to={`post/${post.id}`}>
          <PostCard key={post.id} data={post} />
        </Link>)}
      </div>}
    </AppLayout>
  );
});

export default Home;