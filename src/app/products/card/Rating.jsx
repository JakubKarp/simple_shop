import React from 'react';
import StarIcon from '../../../assets/icons/StarIcon';
import styles from './Card.module.scss';

const Rating = ({ rating }) => (
  <div className={styles.card__rating}>
    <StarIcon rating={rating} />
    <StarIcon rating={rating} />
    <StarIcon rating={rating} />
    <StarIcon rating={rating} />
    <StarIcon rating={rating} />
  </div>
);

export default Rating;
