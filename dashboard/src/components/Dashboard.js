import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import {GeneralContextProvider} from "./GeneralContext";

import "../index.css"; 
import "./dashboard.css";

const Dashboard = ({user}) => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary user={user} />} />
          <Route path="/orders" element={<Orders user={user} />} />
          <Route path="/holdings" element={<Holdings user={user} />} />
          <Route path="/positions" element={<Positions user={user} />} />
          <Route path="/funds" element={<Funds user={user} />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
