import React from 'react';
import EmptyDataIcon from '../../../assets/icons/EmptyDataIcon';
import styles from './NoProductsInfo.module.scss';

const NoProductInfo = () => (
  <div className={styles.noProduct}>
    <div className={styles.noProduct__container}>
      <EmptyDataIcon />
      <div className={styles.noProduct__info}>Ooops… It’s empty here</div>
      <div className={styles.noProduct__text}>There are no products on the list</div>
    </div>
  </div>
);

export default NoProductInfo;
