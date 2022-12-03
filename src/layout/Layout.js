/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/common/TopBar";

const Layout = () => {
  return (
    <div className="main_layout">
      <TopBar />
      <Outlet />
    </div>
  );
};

export default Layout;
