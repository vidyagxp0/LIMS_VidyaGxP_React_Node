import React from 'react';

const Card = ({ title, count, color, onClick }) => {
  let gradientStyle = {};
  switch (color) {
    case 'bluePink':
      gradientStyle = { background: 'linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)' };
      break;
    case 'blue':
      gradientStyle = { background: 'linear-gradient(25deg, #13517a 6%, #2A5298 50%)' };
      break;
    case 'orangeYellow':
      gradientStyle = { background: 'linear-gradient(25deg, orange , #f7e05f)' };
      break;
    case 'green':
      gradientStyle = { background: 'linear-gradient(27deg, green , #0fd850)' };
      break;
    case 'red':
      gradientStyle = { background: 'linear-gradient(27deg, red, #FF719A)' };
      break;
    default:
      gradientStyle = { background: 'linear-gradient(25deg, #0250c5 0%, #d43f8d 100%)' }; // default to one of the gradients
  }

  return (
    <div
      className="p-2 sm:p-3 md:p-4 rounded-lg shadow-md text-white"
      style={gradientStyle}
      onClick={onClick}
    >
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold">{count}</p>
    </div>
  );
};

export default Card;
