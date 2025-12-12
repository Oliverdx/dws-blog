import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useFetchPosts } from '@/hooks/useFetchPosts';

import { FilterProvider } from '@/context/FilterProvider';

import AppLayout from '@/components/Layout/AppLayout';
import PostCard from '@/components/PostCard/PostCard';
import ActionBar from '@/components/ActionBar/ActionBar';

import styles from "./Home.module.css";

import type { Post } from "@/types/Post";
import SideFilter from '@/components/SideFilter/SideFilter';
// import useFilter from '@/hooks/useFilter';

const Home = memo(() => {
  const [postList, setPostList] = useState<Post[]>([])
  const { posts, loading, error } = useFetchPosts();

  // const {
  //   selectedAuthor,
  // } = useFilter();

  useEffect(() => {
    setPostList(posts);
  }, [posts]);

  if (error) return <p>{error}</p>;

  return (
    <FilterProvider>
      <AppLayout>
        {loading ? <>Loading...</> : <div className={`wrapper ${styles.homeWrapper}`}>
          <ActionBar />
          <div className={styles.contentWrapper}>
            <SideFilter />
            <div className={styles.postWrapper}>
            {postList?.map((post: Post) =>
              <Link to={`post/${post.id}`} key={post.id}>
                <PostCard data={post} />
              </Link>)}
          </div>
          </div>
        </div>}
      </AppLayout>
    </FilterProvider>
  );
});

export default Home;