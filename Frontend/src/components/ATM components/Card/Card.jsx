import React from 'react';

const Card = ({ title, count, color }) => {
  return (
    <div className={`bg-${color}-500 p-4 rounded-lg shadow-md text-white`}>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-4xl font-bold">{count}</p>
    </div>
  );
};

export default Card;