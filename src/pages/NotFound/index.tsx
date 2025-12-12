import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import Button from "@/components/Button/Button";
import ArrowLeftIcon from "@/assets/ArrowLeftIcon";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        Oops! The page you are looking for doesn’t exist.
      </p>

      <Link to="/">
        <Button variant="primary" className={styles.button}>
          <ArrowLeftIcon />
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
