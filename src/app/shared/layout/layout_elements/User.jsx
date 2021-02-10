import React from 'react';
import styles from '../Layout.module.scss';

const User = (props) => (
  <div className={styles.layout__user}>
    <img
      className={styles.layout__img}
      src="https://randomuser.me/api/portraits/women/45.jpg"
      alt="user_name"
    />
  </div>
);

export default User;
