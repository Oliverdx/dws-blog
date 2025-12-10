import React from 'react';
import styles from './AppLayout.module.css';
import Header from '@/components/Header/Header';

type LayoutProps = {
  showSideBar?: boolean,
  children: React.ReactNode
}

export default function AppLayout({ children, showSideBar = false}: LayoutProps) {
  return (
    <div className={styles.app}>
      <Header />
      
      <div className={styles.wrapper}>
        {showSideBar && <aside>
        <h2>Sidebar</h2>
        </aside>}
      
        <main>
          {children}
        </main>

      </div>
    </div>
  );
}