import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="p-2">
      navbar
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
