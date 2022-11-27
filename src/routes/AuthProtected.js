import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../components/hooks/UserHooks";

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
  // const { userProfile, loading, token } = useProfile();
  // useEffect(() => {
  //   if (userProfile && !loading && token) {
  //     setAuthorization(token);
  //   } else if (!userProfile && loading && !token) {
  //     dispatch(logoutUser());
  //   }
  // }, [token, userProfile, loading, dispatch]);

  // if (!userProfile && loading && !token) {
  //   return (
  //     <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
  //   );
  // }
};

export default AuthProtected;
