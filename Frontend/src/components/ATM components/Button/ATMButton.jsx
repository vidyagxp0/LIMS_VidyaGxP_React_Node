import React from 'react'

const ATMButton =  ({ color, text, onClick }) => {
    let bgColor = '';
    switch (color) {
      case 'green':
        bgColor = 'bg-green-500 hover:bg-green-600';
        break;
      case 'red':
        bgColor = 'bg-red-500 hover:bg-red-600';
        break;
      case 'blue':
        bgColor = 'bg-blue-500 hover:bg-blue-600';
        break;
      case 'yellow':
        bgColor = 'bg-yellow-500 hover:bg-yellow-600';
        break;
      default:
        bgColor = 'bg-gray-500 hover:bg-gray-600'; // Default to gray if color is not recognized
    }
  return (
    <button
    className={`px-4 py-2 rounded-md text-white ${bgColor}flex justify-center focus:outline-none`}
    onClick={onClick}
  >
    {text}
  </button>
  )
}

export default ATMButton