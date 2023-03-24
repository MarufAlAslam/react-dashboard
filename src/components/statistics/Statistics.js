import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Chart from "./Chart";

const Statistics = () => {
  return (
    <div className="p-3 pl-0">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Statistics</h2>
        <p className="mb-0 flex items-center">Oct. 2021 <FaAngleDown className="ml-2"/></p>
      </div>

      <div className="card bg-white rounded-md mt-4">
        <div className="card-body p-4">
            <p className="text-lg font-[600]">
            Chart title goes here
            </p>
            <p className="text-gray-400 font-normal">
            15 April - 21 April
            </p>

            <Chart/>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
