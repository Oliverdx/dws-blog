import { memo } from "react";
import Button from "../Button/Button";

import styles from "./ActionBar.module.css";
import SortIcon from "@/assets/SortIcon";
import DownArrowIcon from "@/assets/DownArrowIcon";

const ActionBar = memo(() => {
  return <div className={styles.actionBar}>
    <div className={styles.leftActions}>
      <h2 className={styles.mobileHide}>DWS Blog</h2>
      <Button variant="secondary">
        Category <DownArrowIcon />
      </Button>
      <Button variant="secondary">
        Author
        <DownArrowIcon />
      </Button>
    </div>
    <div className={styles.rightActions}>
      <b className={styles.mobileHide}>Sort by: </b>
      <Button variant="sort" className={styles.sortButton}>
        <span>Newest First</span>
        <SortIcon />
      </Button>
    </div>
  </div>
});

export default ActionBar;