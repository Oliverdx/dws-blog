import AppLayout from '@/components/Layout/AppLayout';

import { useFetchPosts } from '@/hooks/useFetchPosts';

function App() {

  const { posts , loading, error } = useFetchPosts();

  if (error) return <p>{error}</p>;

  console.log('Posts: ', posts);

  return (
    <AppLayout>
      {loading ? <>Loading...</> : <>
      </>}
    </AppLayout>
  );
}

export default App;