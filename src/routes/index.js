import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/common/Login";
import Register from "../components/common/Register";
import Layout from "../layout/Layout";
import AuthProtected from "./AuthProtected";
import NotFound from "../pages/NotFound";
import ConversationLayout from "../layout/ConversationLayout";
import GroupInbox from "../layout/common/GroupInbox";
import CommingSoon from "../pages/CommingSoon";
import TagInbox from "../layout/common/TagInbox";

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
            <Route index="true" element={<Navigate to="message" />} />
            <Route path="message" element={<GroupInbox />} />
            <Route path="tags/:tagName" element={<TagInbox />} />
            <Route path="*" element={<CommingSoon />} />
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
