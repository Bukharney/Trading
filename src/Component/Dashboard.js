import React, { useContext, useEffect, useState } from "react";
import Chart from "./Chart";
import Details from "./Details";
import { Header } from "./Header";
import Overview from "./Overview";
import ThemeContext from "../context/ThemeContext";
import { getStockDetails } from "../api/stock_api";
import { getStockQuote } from "../api/stock_api";
import StockContext from "../context/StockContext";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [stockQuote, setStockQuote] = useState({});

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const result = await getStockDetails(stockSymbol);
        console.log(result);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };

    const fetchStockQuote = async () => {
      try {
        const result = await getStockQuote(stockSymbol);
        console.log(result);
        setStockQuote(result);
      } catch (error) {
        setStockQuote({});
        console.log(error);
      }
    };

    fetchStockDetails();
    fetchStockQuote();
  }, [stockSymbol]);

  return (
    <div
      className={`flex flex-1 flex-col overflow-y-auto ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div
        className={`h-full w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:grid-rows-5 xl:grid-rows-4 auto-rows-fr md:gap-6 md:p-10 overflow-y-auto`}
      >
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
          <Header name={stockDetails.name} />
        </div>
        <div className="row-span-2 md:col-span-2 md:row-span-4">
          <Chart />
        </div>
        <div>
          <Overview
            symbol={stockSymbol}
            price={stockQuote.pc}
            change={stockQuote.d}
            currency={stockDetails.currency}
            changePercent={stockQuote.dp}
          />
        </div>
        <div className="row-span-2 xl:row-span-3">
          <Details details={stockDetails} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
