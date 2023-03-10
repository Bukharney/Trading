import React, { useContext } from "react";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

const Details = ({ details }) => {
  const detailslist = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (value) => {
    return (value / 1000).toFixed(2) + "B";
  };

  const { darkMode } = React.useContext(ThemeContext);
  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailslist).map((key) => {
          return (
            <li
              key={key}
              className="flex-1 flex justify-between items-center py-2"
            >
              <span className="text-gray-500">{detailslist[key]}</span>
              <span
                className={`display: inline ${
                  darkMode ? "text-gray-300" : "text-gray-900"
                }`}
              >
                {key === "marketCapitalization"
                  ? convertMillionToBillion(details[key])
                  : details[key]}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
