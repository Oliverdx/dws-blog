
import { memo } from "react";

import Button from "@/components/Button/Button";

import formateDate from "@/util/formatDate";

import type { Post } from "@/types/Post";

import styles from './PostCard.module.css';

const PostCard = memo(({ data }: { data: Post }) => {
  const {
    title,
    content,
    thumbnail_url,
    createdAt,
    author,
    categories
  } = data;

  return <div className={styles.cardWrapper}>
    <div className={styles.cardBg} style={{ backgroundImage: `url(${thumbnail_url})` }} />
    <div className={styles.cardContent}>
      <p className={styles.cardCaption}>{formateDate(createdAt)} <span className={styles.separator} /> {author.name}</p>
      <div>
        <h3>{title}</h3>
        <p className={styles.cardContentText}>{content}</p>
      </div>
      <div>
        {categories?.map(category => 
        <Button key={category.id} variant="category">
          {category.name}
        </Button>)}
      </div>
    </div>
  </div>
});

export default PostCard;