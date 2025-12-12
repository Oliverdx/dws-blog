import { useEffect, useState } from 'react';

import useFetchFilterList, { type filterItem } from "@/hooks/useFetchFilterList";
import type { filterBy } from "@/services/getFilterList";

import useFilter from '@/hooks/useFilter';

import styles from './FilterList.module.css';
import ArrowLeftIcon from '@/assets/ArrowLeftIcon';
interface FilterListProps {
  filterBy: filterBy,
  selectedItens: string[],
  closeFilterList: () => void;
}

const FilterList = ({ filterBy, selectedItens, closeFilterList }: FilterListProps) => {

  const [list, setList] = useState<filterItem[]>([]);

  const {
    filterList,
    loadingFilterList,
    errorFilterList
  } = useFetchFilterList(filterBy);

  useEffect(() => {
    setList(filterList)
  }, [filterList]);

  const {
    toggleAuthor,
    toggleCategory
  } = useFilter();

  const selectFilter = (item: string) => {
    if (filterBy === "author") {
      toggleAuthor(item);
    } else {
      toggleCategory(item);
    }
  };

  const searchList = (term: string) => {
    if (term === "")
      setList(filterList);

    const filteredList = filterList.filter(item => 
        item.name.toLowerCase().indexOf(term.toLowerCase()) >= 0)

    if (filteredList.length) {
      setList(filteredList)
      return;
    }

    setList([{id: "0", name: "No item with this terms found, please try again"}]);
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

    <div className={styles.searchWrapper}>
      <button className={styles.closeListBtn} onClick={closeFilterList}>
        <ArrowLeftIcon />
      </button>
      <input
        type="search"
        placeholder='Search...'
        className={styles.searchItem}
        onChange={e => searchList(e.target.value)}
      />
    </div>

    {list.length && list?.map(filterItem =>
      <button
        key={filterItem.id}
        onClick={() => selectFilter(filterItem.id)}
        className={`${styles.dropdownItem} ${selectedItens.find(item => item === filterItem.id) ? styles.selectedItem : null}`}
      >
        <span>{filterItem.name}</span>
      </button>
    )}
  </div>
};

export default FilterList;