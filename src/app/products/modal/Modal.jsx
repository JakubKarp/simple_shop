import React from 'react';
import ModalCard from '../card/ModalCard';
import styles from './Modal.module.scss';

const Modal = ({ product, closeModal }) => {
  return (
    <div className={styles.modal__layer}>
      <div className={styles.modal__container}>
        <ModalCard product={product} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
