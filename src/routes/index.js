import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/common/Login";
import Register from "../components/common/Register";
import Layout from "../layout/Layout";
import AuthProtected from "./AuthProtected";
import NotFound from "../pages/NotFound";
import ConversationLayout from "../layout/ConversationLayout";
import GroupInbox from "../layout/common/GroupInbox";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/app/message" />} />
        <Route
          element={
            <AuthProtected>
              <Layout />
            </AuthProtected>
          }
        >
          <Route path="app" element={<ConversationLayout />}>
            <Route path="message" element={<GroupInbox />} />
            <Route path="*" element={<Navigate to="/404" />} />
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
