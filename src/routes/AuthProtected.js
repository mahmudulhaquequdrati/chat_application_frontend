import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/userHooks";

const AuthProtected = ({ children }) => {
  const location = useLocation();
  const { userProfile, loading } = useProfile();
  if (loading) {
    return <div>Loading...</div>;
  }

  return !userProfile && !loading ? (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  ) : (
    children
  );
  // }
};

export default AuthProtected;
