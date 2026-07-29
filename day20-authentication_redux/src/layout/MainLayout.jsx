import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
