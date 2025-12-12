import { useState } from 'react';

import Search from '@/assets/SearchIcon';

import styles from './Header.module.css';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const searchAction = () => {
    if(searchOpen){
      //For the future
      //Do the search using context
      alert('Sorry, search is not available yet!')
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