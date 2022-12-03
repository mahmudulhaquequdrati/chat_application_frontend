import React from "react";
import "../../../node_modules/boxicons/css/boxicons.min.css";
import { MdPermContactCalendar } from "react-icons/md";
import { FiInbox } from "react-icons/fi";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { IoMdStats, IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline, IoFilter } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { BiSearch } from "react-icons/bi";

const TopBar = () => {
  return (
    <div className="topbar px-1 px-sm-2 px-md-3 ">
      <div className="d-flex gap-2 align-items-center h-100 topbar_icons ">
        <FiInbox className=" icons" />
        <BsFillCalendar2DateFill className=" calendar-icon" />
        <MdPermContactCalendar className="icons" />
        <IoMdStats className="icons " />
      </div>
      <form className="d-flex bg-topbar_search topbar_search_wrapper">
        <BiSearch className="icon" />
        <input
          className="topbar_search bg-topbar_search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <IoFilter className="icon me-2" />
      </form>
      <div className="topbar_icons">
        <IoIosHelpCircleOutline className=" icons" />
        <IoSettingsOutline className=" icons" />
        <FcGoogle className="icons" />
      </div>
    </div>
  );
};

export default TopBar;
