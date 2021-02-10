import React from 'react';
import CrossIcon from '../../../assets/icons/CrossIcon';
import styles from './Card.module.scss';

const ModalCard = ({ product, closeModal }) => {
  const { image, name, description } = product;

  return (
    <div className={`${styles.card} ${styles.card__modal}`}>
      <div className={styles.card__close} onClick={() => closeModal()}>
        <CrossIcon />
      </div>
      <div className={styles.card__info}>
        <div className={styles.card__animated}>
          <img src={image} alt={name} className={styles.card__image} />
        </div>
        <div className={styles.card__details}>
          <div className={styles.card__name__modal}>{name}</div>
          <div className={styles.card__description__modal}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
