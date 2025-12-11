import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.header}>
    <div className={`wrapper ${styles.headerWrapper}`}>
      <img src="/images/logo.png" />
      <input type="search" className={styles.searchWrapper} />
    </div>
  </header>
}

export default Header;