import React from "react";
import { mockCompanyDetails } from "../Constans/mock";
import Card from "./Card";
import Details from "./Details";
import { Header } from "./Header";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="h-screen grid gap-6 p-2 md:p-10 font-lato">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={mockCompanyDetails.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Card>Chart</Card>
      </div>
      <div className=" row-span-1">
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          currency={"USD"}
          changePercent={30}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockCompanyDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
