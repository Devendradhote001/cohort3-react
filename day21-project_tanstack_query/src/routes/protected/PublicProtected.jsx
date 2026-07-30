import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  let { user } = useSelector((store) => store.auth);

  if (user) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default PublicProtected;
