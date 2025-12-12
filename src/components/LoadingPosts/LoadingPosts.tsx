import styles from "./LoadingPosts.module.css";

const LoadingPosts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <p className={styles.text}>Loading, please wait...</p>
    </div>
  );
};

export default LoadingPosts;