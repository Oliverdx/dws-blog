import styles from './Header.module.css';

const Header = () => {
  return <header className={styles.header}>
    <div className={`wrapper ${styles.headerWrapper}`}>
      <img src="/images/logo.png" />
      <div className={styles.searchWrapper}>
        Search
      </div>
    </div>
  </header>
}

export default Header;