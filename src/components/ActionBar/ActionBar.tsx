import { memo, useState } from "react";
import Button from "../Button/Button";

import styles from "./ActionBar.module.css";
import SortIcon from "@/assets/SortIcon";
import DownArrowIcon from "@/assets/DownArrowIcon";

import FilterList from "@/components/FilterList/FilterList";
import type { filterBy } from "@/services/getFilterList";

const ActionBar = memo(() => {
  const [filter, setFilter] = useState<filterBy | null>(null);

  const toggleFilterDropdown = (type: filterBy) => {
    if (filter && filter === type)
      setFilter(null);
    else
      setFilter(type)
  }

  return <div className={styles.actionBar}>
    <div className={styles.leftActions}>
      <h2 className={styles.mobileHide}>DWS Blog</h2>
      <Button variant="secondary" onClick={() => toggleFilterDropdown('category')}>
        Category <DownArrowIcon />
      </Button>
      <Button variant="secondary" onClick={() => toggleFilterDropdown('author')}>
        Author
        <DownArrowIcon />
      </Button>
      {!!filter && <FilterList filterBy={filter} />}
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