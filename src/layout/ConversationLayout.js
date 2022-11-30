import React from "react";
import { BiMessageAltEdit } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
// import SimpleBar from "simplebar-react";
// import "../../node_modules/simplebar-react/dist/simplebar.min.css";

const ConversationLayout = () => {
  return (
    <div className="conversation_grid  mx-2 grid-container mt-1 border">
      {/* new message */}
      <div className=" px-0 mt-2">
        <div className="d-flex align-items-center px-0">
          <button className="btn compose-btn">
            <BiMessageAltEdit size={20} />
            <span className="ms-1 compose">Compose</span>
          </button>
          <div className="bg-dark-primary text-white d-flex align-items-center pe-3 ps-2 cheveromDown">
            <BsChevronDown size={14} className="cursor" />
          </div>
        </div>
        <Sidebar />
      </div>
      {/* ends first col */}
      <div className=" ps-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ConversationLayout;
