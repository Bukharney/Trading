import React from "react";

const Chartfilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-8 w-12 m-2 border-1 rounded-md ${
        active
          ? " bg-indigo-600 border-indigo-300 text-gray-300"
          : " border-indigo-300 text-indigo-300"
      }`}
    >
      {text}
    </button>
  );
};

export default Chartfilter;
