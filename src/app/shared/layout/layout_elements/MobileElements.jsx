import React from 'react';
import User from './User';
import Filter from './Filter';
import Logo from './Logo';
import Search from './Search';
import styles from '../Layout.module.scss';

const MobileElements = () => (
  <div className={styles.layout}>
    <div className={styles.layout__mobile}>
      <Logo />
      <User />
    </div>
    <div className={styles.layout__container}>
      <Search />
      <Filter />
    </div>
  </div>
);

export default MobileElements;
