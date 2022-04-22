import React from 'react';

import './Card.css';

const Card = (props) => {
  const { children, className} = props;
  const cardClassName = 'card ' + className;

  return <div className={cardClassName}>{children}</div>
}

export default Card;