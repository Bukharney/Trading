import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Card = ({ children }) => {
  const { darkMode } = React.useContext(ThemeContext);
  return (
    <div
      className={`w-full h-full rounded-md relative p-8 border-2 max-h-full min-h-[0] max-h-full${
        darkMode
          ? " bg-gray-900 border-gray-800"
          : " bg-white border-neutral-200"
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
