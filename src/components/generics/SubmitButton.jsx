// SubmitButton.js
import React from 'react';

const SubmitButton = ({ onClick, children }) => {
  return (
    <button
      type="submit"
      className="text-white border-2 border-secondary py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg font-medium shadow-lg text-center duration-900 ease-in-out transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
