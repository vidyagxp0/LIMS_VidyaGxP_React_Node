import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastContainer = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ToastContainer;
