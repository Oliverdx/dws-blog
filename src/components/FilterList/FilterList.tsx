import styles from './FilterList.module.css';
import { Link } from "react-router-dom";
import useFetchFilterList from "@/hooks/useFetchFilterList";
import type { filterBy } from "@/services/getFilterList";
import { memo } from 'react';

interface FilterListProps {
  filterBy: filterBy
}

const FilterList = memo(({filterBy}: FilterListProps) => {
  
  const {filterList, loadingFilterList, errorFilterList} = useFetchFilterList(filterBy);

  if(loadingFilterList)
    return <div className={styles.dropdownWrapper}>
      Loading the list of {filterBy}...
    </div>;

    if(errorFilterList)
    return <div className={styles.dropdownWrapper}>
      Error when trying to get the {filterBy} list
    </div>;

  return <div className={styles.dropdownWrapper}>
    {filterList.length && filterList?.map(filterItem => 
      <Link key={filterItem.id} to={`?${filterBy}=${filterItem.name}`}>
        <span className={styles.dropdownItem}>{filterItem.name}</span>
      </Link>
    )}
  </div>
});

export default FilterList;