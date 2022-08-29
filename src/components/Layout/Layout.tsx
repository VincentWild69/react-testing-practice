import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Aside from '../Aside/Aside';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Aside />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
