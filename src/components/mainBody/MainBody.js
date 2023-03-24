import React from "react";
import Messages from "../messages/Messages";
import Statistics from "../statistics/Statistics";
import Cards from "./cards/Cards";
import TopBar from "./topbar/Topbar";

const MainBody = () => {
  return (
    <div className="pt-[24px] px-5 w-[calc(100vw-260px)] min-h-screen">
      <TopBar />
      <Cards />
      <div className="flex justify-between items-start">
        <div className="w-3/4">
          <Statistics />
        </div>
        <div className="w-1/4">
          <Messages />
        </div>
      </div>
    </div>
  );
};

export default MainBody;
