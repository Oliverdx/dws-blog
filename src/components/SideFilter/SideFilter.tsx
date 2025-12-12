import FilterIcon from "@/assets/FilterIcon";

import styles from "./SideFilter.module.css";
import Button from "../Button/Button";
import useFetchFilterList from "@/hooks/useFetchFilterList";

const SideFilter = () => {
  const { filterList: categoryList } = useFetchFilterList('category');
  const { filterList: authorList } = useFetchFilterList('author');

  return <aside className={styles.sidebarWrapper}>
    <h3 className={styles.sidebarTitle}>
      <FilterIcon />
      Filters
    </h3>

    <div>
      <h4 className={styles.filterTitle}>Category</h4>
      <ul className={styles.filterList}>
        {categoryList.map(category => 
          <li className={styles.filterItem} key={category.id}>{category.name}</li>
        )}
      </ul>
    </div>
    <div>
      <h4 className={styles.filterTitle}>Author</h4>
      <ul className={styles.filterList}>
        {authorList.map(author => 
          <li className={styles.filterItem} key={author.id}>{author.name}</li>
        )}
      </ul>
    </div>

    <Button variant="primary">
        Apply filters
    </Button>
  </aside>
};

export default SideFilter;