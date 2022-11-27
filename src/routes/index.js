import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/common/Login";
import Register from "../components/common/Register";
import Layout from "../layout/Layout";
import AuthProtected from "./AuthProtected";
import Inbox from "../pages/Inbox";
import NotFound from "../pages/NotFound";
import ConversationLayout from "../layout/ConversationLayout";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/app" />} />
        <Route
          element={
            <AuthProtected>
              <Layout />
            </AuthProtected>
          }
        >
          <Route path="app" element={<ConversationLayout />}>
            <Route path="inbox" element={<Inbox />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default Index;
