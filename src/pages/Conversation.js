import React from "react";
import { Outlet } from "react-router-dom";

const Conversation = () => {
  return (
    <div>
      <h2> this is a conversation page</h2>
      <Outlet />
    </div>
  );
};

export default Conversation;
