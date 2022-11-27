import React from "react";
import "../../../node_modules/boxicons/css/boxicons.min.css";
import FeatherIcon from "feather-icons-react";

const TopBar = () => {
  return (
    <div className="topbar ">
      <div className="d-flex gap-2 align-items-center h-100 topbar_icons  ps-2 ps-sm-3">
        <FeatherIcon icon="inbox" className=" icons" size={30} />
        <i className="bx bx-calendar"></i>
        <i className="bx bxs-contact"></i>
        <FeatherIcon icon="bar-chart-2" className=" icons" size={30} />
      </div>
      <form className="d-flex bg-topbar_search topbar_search_wrapper">
        <i className="bx bx-search-alt-2"></i>
        <input
          className="topbar_search h-75 bg-topbar_search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <i className="bx bx-filter pe-2"></i>
      </form>
      <div className="topbar_icons pe-2">
        <i className="bx bx-help-circle "></i>
        <i className="bx bx-cog "></i>
        <i className="bx bxl-google"></i>
      </div>
    </div>
  );
};

export default TopBar;
