import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "20px",
          color: "white",
          textDecoration: "none",
        }}
      >
        <NavLink to={"/"}>App</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
