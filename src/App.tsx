import AppLayout from '@/components/Layout/AppLayout';

import { useFetchPosts } from '@/hooks/useFetchPosts';
import PostCard from './components/PostCard/PostCard';

import type { Post } from "@/types/Post";
import ActionBar from './components/ActionBar/ActionBar';

function App() {

  const { posts , loading, error } = useFetchPosts();

  if (error) return <p>{error}</p>;

  console.log('Posts: ', posts);

  return (
    <AppLayout>
      {loading ? <>Loading...</> : <div className={`wrapper`}
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
        <ActionBar />
        {posts?.map((post: Post) => <PostCard key={post.id} data={post} />)}
      </div>}
    </AppLayout>
  );
}

export default App;