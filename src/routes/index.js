import React, { Component, ComponentWrapper, useEffect, useState } from "react";
import { Routes, Route, useRoutes, Navigate } from "react-router-dom";
import Login from "../components/common/Login";
import Register from "../components/common/Register";
import Layout from "../layout/Layout";
import AuthProtected from "./AuthProtected";

const Index = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/conversation" />} />
        <Route
          path="/conversation"
          element={
            <AuthProtected>
              <Layout />
            </AuthProtected>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
};

export default Index;
