import React from 'react';
import User from './User';
import Filter from './Filter';
import Logo from './Logo';
import Search from './Search';
import styles from '../Layout.module.scss';

const DesktopElements = () => (
  <div className={styles.layout}>
    <div className={styles.layout__desktop}>
      <Logo />
      <div className={styles.layout__container}>
        <Search />
        <Filter />
      </div>
      <User />
    </div>
  </div>
);

export default DesktopElements;
