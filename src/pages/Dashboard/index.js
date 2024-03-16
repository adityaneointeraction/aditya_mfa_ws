import React from "react";
import ColumnChart from "../../components/Charts/ColumnChart";
import LineChart from "../../components/Charts/LineChart/LineChart";
import RadialBarChart from "../../components/Charts/RadialBarChart/RadialBarChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="grid">
        <ColumnChart />
        <LineChart />
        <RadialBarChart />
      </div>
    </div>
  );
};

export default Dashboard;
