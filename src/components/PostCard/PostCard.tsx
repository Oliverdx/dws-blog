import type { Post } from "@/types/Post";
import { useMemo, memo } from "react";

import styles from './PostCard.module.css';
import Button from "../Button/Button";

const PostCard = memo(({ data }: { data: Post }) => {
  const {
    title,
    content,
    thumbnail_url,
    createdAt,
    author,
    categories
  } = data;

  const cardDate = useMemo(() => {
    const date = new Date(createdAt);
    const formatted = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });

    return formatted;

  },[createdAt]);

  return <div className={styles.cardWrapper}>
    <div className={styles.cardBg} style={{ backgroundImage: `url(${thumbnail_url})` }} />
    <div className={styles.cardContent}>
      <p className={styles.cardCaption}>{cardDate} <span className={styles.separator} /> {author.name}</p>
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