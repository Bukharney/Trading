import React, { useContext } from "react";
import StockContext from "../context/StockContext";
import ThemeContext from "../context/ThemeContext";

const SearchResult = ({ result }) => {
  const { setStockSymbol } = useContext(StockContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-scroll border-neutral-100 custom-scrollbar ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      {result.map((item) => {
        return (
          <li
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
              darkMode ? "hover:bg-indigo-800" : "hover:bg-indigo-200"
            }`}
            onClick={() => {
              setStockSymbol(item.symbol);
              console.log(item.symbol);
            }}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResult;
