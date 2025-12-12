import { useState } from "react";

import type { filterBy } from "@/services/getFilterList";

import FilterList from "@/components/FilterList/FilterList";
import Button from "@/components/Button/Button";

import SortIcon from "@/assets/SortIcon";
import DownArrowIcon from "@/assets/DownArrowIcon";

import styles from "./ActionBar.module.css";
import useFilter from "@/hooks/useFilter";

const ActionBar = () => {
  const [filter, setFilter] = useState<filterBy | null>(null);
  const {
    selectedAuthor,
    selectedCategory
  } = useFilter();

  const toggleFilterDropdown = (type: filterBy) => {
    if (filter && filter === type)
      setFilter(null);
    else
      setFilter(type)
  }

  return <div className={styles.actionBar}>
    <div className={styles.leftActions}>
      <h2 className={styles.mobileHide}>DWS Blog</h2>
      <Button className={styles.filterBtn} variant="secondary" onClick={() => toggleFilterDropdown('category')}>
        Category <DownArrowIcon />
      </Button>
      <Button className={styles.filterBtn} variant="secondary" onClick={() => toggleFilterDropdown('author')}>
        Author
        <DownArrowIcon />
      </Button>
      {!!filter && <FilterList
        filterBy={filter}
        selectedItem={filter === "author" ? selectedAuthor : selectedCategory}
      />}
    </div>
    <div className={styles.rightActions}>
      <b className={styles.mobileHide}>Sort by: </b>
      <Button variant="sort" className={styles.sortButton}>
        <span>Newest First</span>
        <SortIcon />
      </Button>
    </div>
  </div>
};

export default ActionBar;