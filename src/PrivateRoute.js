import { useContext } from "react";

import Login from "./pages/login/Login";
import { AuthContext } from "./context/AuthContext";
// import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute({ Component }) {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return Component;
  } else {
    return <Login />;
  }
}
