import React, { useState } from "react";
import { BiMessageAltEdit } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const ConversationLayout = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setActiveMenu(!activeMenu);
  };

  return (
    <div className="conversation_grid  mx-2 grid-container ">
      {/* new message */}
      <div className=" pt-3 ">
        <FeatherIcon
          icon={"menu"}
          className="text-gray_light icons cursor d-flex d-lg-none ms-2"
          size={20}
          onClick={(e) => {
            handleToggle(e);
          }}
        />

        <div
          className={`  ps-3 ps-lg-1 border  ${
            activeMenu
              ? "conversation_menu_wrapper_active"
              : "conversation_menu_wrapper"
          }`}
          id="conversation_menu_wrapper"
        >
          <div className="d-flex  justify-content-between ">
            <div className=" px-0 mb-2 d-flex align-items-center">
              <div className="">
                <button className="btn compose-btn d-flex align-items-center">
                  <BiMessageAltEdit size={20} />
                  <p className="ms-1 compose mb-0 d-none d-md-block">Compose</p>
                </button>
              </div>
              <div className="bg-dark-primary text-white d-flex align-items-center ps-2 pe-3 cheveromDown">
                <BsChevronDown size={12} className="cursor" />
              </div>
            </div>
            <FeatherIcon
              icon={"x"}
              className="text-gray_light icons cursor d-block d-lg-none  mt-1 me-1"
              size={20}
              onClick={(e) => {
                handleToggle(e);
              }}
            />
          </div>
          <Sidebar />
        </div>
      </div>
      {/* ends first col */}
      <div className=" ps-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ConversationLayout;
