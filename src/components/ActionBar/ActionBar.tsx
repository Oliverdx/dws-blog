import { useState } from "react";

import type { filterBy } from "@/services/getFilterList";

import FilterList from "@/components/FilterList/FilterList";
import Button from "@/components/Button/Button";

import useFilter from "@/hooks/useFilter";

import SortIcon from "@/assets/SortIcon";
import DownArrowIcon from "@/assets/DownArrowIcon";

import styles from "./ActionBar.module.css";
import type { filterItem } from "@/hooks/useFetchFilterList";

const ActionBar = () => {
  const [filter, setFilter] = useState<filterBy | null>(null);

  const {
    selectedAuthors,
    selectedCategories,
    sortBy,
    setSort
  } = useFilter();

  const toggleFilterDropdown = (type: filterBy) => {
    if (filter && filter === type)
      setFilter(null);
    else
      setFilter(type)
  }

  const toggleSort = () => {

    if(sortBy === "newest")
      setSort("oldest");
    else
      setSort('newest');
  }

  const normalizeList = (list: filterItem[]) => {
    const listOfLabels = list.map(item => item.name);
    
    return listOfLabels.join(',');
  }

  return <div className={styles.actionBar}>
    <div className={styles.leftActions}>
      <h2 className={styles.mobileHide}>DWS Blog</h2>
      <Button className={styles.filterBtn} variant="secondary" onClick={() => toggleFilterDropdown('category')}>
        {selectedCategories.length ? normalizeList(selectedCategories) : "Category"} <DownArrowIcon />
      </Button>
      <Button className={styles.filterBtn} variant="secondary" onClick={() => toggleFilterDropdown('author')}>
        {selectedAuthors.length ? normalizeList(selectedAuthors) : "Author"} <DownArrowIcon />
      </Button>
      {!!filter && <FilterList
        filterBy={filter}
        closeFilterList={() => setFilter(null)}
        selectedItens={filter === "author" ? selectedAuthors : selectedCategories}
      />}
    </div>
    <div className={styles.rightActions}>
      <b className={styles.mobileHide}>Sort by: </b>
      <Button variant="sort" className={styles.sortButton} onClick={toggleSort}>
        <span>{sortBy.slice(0, 1).toLocaleUpperCase() + sortBy.slice(1, sortBy.length)} First</span>
        <SortIcon />
      </Button>
    </div>
  </div>
};

export default ActionBar;