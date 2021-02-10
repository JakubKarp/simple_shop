import React from 'react';
import Card from './Card';

const CardContainer = ({ dataToShow }) => (
  <div className="card__container">
    {dataToShow.map((product) => (
      <Card key={product.id} product={product} />
    ))}
  </div>
);

export default CardContainer;
