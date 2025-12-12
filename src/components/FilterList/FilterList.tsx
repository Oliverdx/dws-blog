import { memo } from 'react';

import useFetchFilterList from "@/hooks/useFetchFilterList";
import type { filterBy } from "@/services/getFilterList";

import useFilter from '@/hooks/useFilter';

import styles from './FilterList.module.css';
interface FilterListProps {
  filterBy: filterBy,
  selectedItem: string | null
}

const FilterList = memo(({ filterBy, selectedItem }: FilterListProps) => {

  const { filterList, loadingFilterList, errorFilterList } = useFetchFilterList(filterBy);

  const {
    setAuthor,
    setCategory
  } = useFilter();

  const selectFilter = (item: string) => {
    console.log('item', item);

    if(filterBy === "author")
      setAuthor(item)

    setCategory(item);
  }

  if (loadingFilterList)
    return <div className={styles.dropdownWrapper}>
      Loading the list of {filterBy}...
    </div>;

  if (errorFilterList)
    return <div className={styles.dropdownWrapper}>
      Error when trying to get the {filterBy} list
    </div>;

  return <div className={styles.dropdownWrapper}>
    {filterList.length && filterList?.map(filterItem =>
      <button
        key={filterItem.id}
        onClick={() => selectFilter(filterItem.id)}
        className={`${styles.dropdownItem} ${selectedItem === filterItem.id ? styles.selectedItem : null}`}
      >
        <span>{filterItem.name}</span>
      </button>
    )}
  </div>
});

export default FilterList;