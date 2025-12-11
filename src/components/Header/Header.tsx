import Search from '@/assets/SearchIcon';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const searchAction = () => {
    if(searchOpen){
      //Do the search
    }
    setSearchOpen((prev: boolean) => !prev);
  }

  return <header className={styles.header}>
    <div className={`wrapper ${styles.headerWrapper}`}>
      <img src="/images/logo.png" />
      <form
        className={`${styles.searchWrapper}
        ${searchOpen && styles.searchOpen}`}
      >
        <input id="search" name="postsearch" type="search" className={styles.searchInput} placeholder='Search'/>
        <button type="button" onClick={searchAction} className={styles.searchIcon}>
          <Search/>
        </button>
      </form>
    </div>
  </header>
}

export default Header;