import React from 'react';

const Card = ({ title, count, color,onClick  }) => {
  
  let gradientClasses = '';
  switch (color) {
    case 'green':
      gradientClasses = 'from-green-400 to-green-600';
      break;
    case 'red':
      gradientClasses = 'from-red-400 to-red-600';  
      break;
    case 'pink':
      gradientClasses = 'from-pink-400 to-pink-600';
      break;
    case 'blue':
      gradientClasses = 'from-blue-400 to-blue-600';
      break;
    case 'yellow':
      gradientClasses = 'from-yellow-400 to-yellow-600';
      break;
    default:
      gradientClasses = '';
  }

  return (
    <div className={`bg-gradient-to-br ${gradientClasses} p-4 rounded-lg shadow-md text-white`}   onClick={onClick}>
      <h2 className="text-2xl">{title}</h2>
      <p className="text-4xl font-bold">{count}</p>
    </div>
  );
};

export default Card;
