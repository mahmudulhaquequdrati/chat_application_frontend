import Login from "../components/common/Login";
import Register from "../components/common/Register";
import Layout from "../layout/Layout";
import { Navigate } from "react-router-dom";

const authProtectedRoutes = [
  { path: "/conversation", component: Layout },
  {
    path: "/",
    component: () => <Navigate to="/conversation" />,
  },
  {
    // others routes will be here
  },
];

const publicRoutes = [
  // Authemtication Pages
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export { publicRoutes, authProtectedRoutes };
