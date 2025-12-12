import Button from '@/components/Button/Button';
import AppLayout from '@/components/Layout/AppLayout';
import { useFetchSinglePost } from '@/hooks/useFetchSinglePost';
import { useNavigate, useParams } from 'react-router-dom';

import styles from "./Post.module.css";
import formateDate from '@/util/formatDate';
import ArrowLeftIcon from '@/assets/ArrowLeftIcon';
import { useFetchPosts } from '@/hooks/useFetchPosts';
import PostCard from '@/components/PostCard/PostCard';

function PostPage() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { post, loading, error } = useFetchSinglePost(id);
  const { posts: relatedPosts, error: relatedError } = useFetchPosts(3);

  if (error) return <p>{error}</p>;

  return (
    <AppLayout>
      <div className="wrapper">
        <Button
          onClick={() => navigate(-1)}
          variant="secondary"
          className={styles.backButton}
        >
          <ArrowLeftIcon />
          Back
        </Button>
        {loading ? <h1>Loading post...</h1> :
          <div>
            <div className={styles.postHeader}>
              <h2>{post?.title}</h2>
              <div className={styles.postAuthor}>
                <img src={post?.author.profilePicture} alt={post?.author.name} />
                <p>Written by: <b>{post?.author.name}</b>
                  {!!post?.createdAt && <span>{formateDate(post?.createdAt)}</span>}
                </p>
              </div>
            </div>
            <div className={styles.postContent}>
              <div className={styles.postThumbnail} style={{ backgroundImage: `url(${post?.thumbnail_url})` }}></div>
              <p>{post?.content}</p>
            </div>
          </div>}
      </div>
      {!relatedError && <div className={`${styles.latestPosts} wrapper`}>
        {relatedPosts?.map(post => 
          <PostCard key={post.id} data={post} />)}
      </div>}
    </AppLayout>
  );
}

export default PostPage; 