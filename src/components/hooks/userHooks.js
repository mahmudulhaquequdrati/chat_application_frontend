import { useEffect, useState } from "react";

const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};
const userProfileSession = getLoggedinUser();

const useProfile = () => {
  const [userProfile, setUserProfile] = useState(userProfileSession);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userProfile = sessionStorage.getItem("authUser");
    if (userProfile) {
      setUserProfile(JSON.parse(userProfile));
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  return { userProfile, loading };
};

export { useProfile };
