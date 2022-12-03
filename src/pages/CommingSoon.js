/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="comming_soon_wrapper d-flex justify-content-center align-items-center h-100 ">
      <div>
        <h1>
          coming soon<span className="dot">.</span>
        </h1>
        <p>This page is on the way. Be patient please!</p>
        <div className="icons">
          <i className="bx bxl-facebook-circle bx-md"></i>
          <i class="bx bxl-youtube bx-md"></i>
          <i class="bx bxl-telegram bx-md"></i>
        </div>
        <div className=" text-center w-100 mt-4">
          <Link className="text-dark-primary" to="/">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
