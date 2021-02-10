import React from 'react';

const Button = ({ name, type, buttonFunction = null }) => {
  const buttonClicked = () => {
    if (type === 'blue') {
      buttonFunction();
    }
    return;
  };

  return (
    <button className={`button ${type}`} onClick={() => buttonClicked()} type="submit">
      <span>{name}</span>
    </button>
  );
};

export default Button;
