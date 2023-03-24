import React from "react";
import { FaAngleDown } from "react-icons/fa";
import MessageData from "./MessageData";

const Messages = () => {
  return (
    <div className="p-3 pl-0">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Messages</h2>
        <a href="" className="mb-0 flex items-center text-blue-600">view all</a>
      </div>

      <div className="card bg-white rounded-md mt-4">
        <div className="card-body p-4">
            <MessageData/>
        </div>
      </div>
    </div>
  );
};

export default Messages;
