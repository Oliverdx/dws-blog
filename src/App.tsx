import { useFetchPosts } from '@/hooks/useFetchPosts';

import './App.css'

function App() {

  const { posts , loading, error } = useFetchPosts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log('Posts: ', posts);

  return (
    <main>
    </main>
  );
}

export default App;