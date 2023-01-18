import React from 'react';

type CardProps = {
  children: React.ReactElement | React.ReactNode
}

const Card = ({ children }: CardProps) => (
  <div className="p-3 rounded shadow-lg bg-white">{children}</div>
);

export default Card;
