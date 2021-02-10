import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setActiveFilter,
  unsetActiveFilter,
  setPromoFilter,
  unsetPromoFilter,
} from '../../../../redux/actions-creators';
import CheckedIcon from '../../../../assets/icons/CheckedIcon';
import styles from '../Layout.module.scss';

const Filter = () => {
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);
  const dispatch = useDispatch();

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  const togglePromo = () => {
    setPromo((prev) => !prev);
  };

  useEffect(() => {
    if (active) {
      dispatch(setActiveFilter());
    } else {
      dispatch(unsetActiveFilter());
    }
  }, [active, dispatch]);

  useEffect(() => {
    if (promo) {
      dispatch(setPromoFilter());
    } else {
      dispatch(unsetPromoFilter());
    }
  }, [promo, dispatch]);

  return (
    <div className={styles.layout__filters}>
      <div className={styles.layout__filter} onClick={() => toggleActive()}>
        <input className={styles.layout__checkbox} type="checkbox" />
        {active && <CheckedIcon className={styles.layout__checked} />}
        <span className={styles.layout__info}>Active</span>
      </div>
      <div className={styles.layout__filter} onClick={() => togglePromo()}>
        <input className={styles.layout__checkbox} type="checkbox" />
        {promo && <CheckedIcon className={styles.layout__checked} />}
        <span className={styles.layout__info}>Promo</span>
      </div>
    </div>
  );
};

export default Filter;
