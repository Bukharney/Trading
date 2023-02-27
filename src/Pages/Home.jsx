import React, { useState } from "react";

import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import Pnf from "../component/template/404";
import Sidebar from "../component/Sidebar";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <div className="h-screen w-full overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<Pnf />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;
