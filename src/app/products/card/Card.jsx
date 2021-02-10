import React, { useState } from 'react';
import Button from '../../shared/button/Button';
import Modal from '../modal/Modal';
import Rating from './Rating';

import styles from './Card.module.scss';

const Card = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { image, name, description, rating, active, promo } = product;

  const openDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <div className={styles.card__animated}>
          <img src={image} alt={name} className={styles.card__image} />
        </div>
        {promo && <div className={styles.card__promo}>Promo</div>}
        <div className={styles.card__details}>
          <div className={styles.card__name}>{name}</div>
          <div className={styles.card__description}>{description}</div>
        </div>
      </div>
      <div className={styles.card__button}>
        <Rating rating={rating} />
        <Button
          name={active ? 'Show details' : 'Unavailable'}
          type={active ? 'blue' : 'gray'}
          buttonFunction={openDetails}
        />
        {showDetails && <Modal product={product} closeModal={openDetails} />}
      </div>
    </div>
  );
};

export default Card;
