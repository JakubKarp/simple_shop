import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../routing/AppRoute.enum';
import Button from '../shared/button/Button';
import styles from './Login.module.scss';

export const Login = () => {
  return (
    <div className={styles.login__container}>
      <div className={styles.login__image}></div>
      <div className={styles.login__main}>
        <Link to={AppRoute.home}>
          <h1>join.tsh.io</h1>
        </Link>
        <form className={styles.login__form}>
          <h2>Login</h2>
          <div className={styles.login__group}>
            <label className={styles.login__label}>Username</label>
            <input name="username" placeholder="Enter login" className={styles.login__input} />
          </div>
          <div className={styles.login__group}>
            <label className={styles.login__label}>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              className={styles.login__input}
            />
          </div>
          <Button name={'Log in'} type="blue" buttonFunction={() => {}} />
        </form>
        <Link to={AppRoute.home}>
          <p className={styles.login__recover}>Forgot Password?</p>
        </Link>
      </div>
    </div>
  );
};
