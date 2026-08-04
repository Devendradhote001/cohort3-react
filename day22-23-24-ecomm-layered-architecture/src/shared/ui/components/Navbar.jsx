import React from "react";
import { NavLink } from "react-router";
import { Box, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center gap-5 justify-between bg-yellow-600 py-4 px-10">
      <h1>Logo</h1>

      <div className="flex items-center gap-10 text-xl text-black">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          }
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          }
          to={"/main/product"}
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          }
          to={"/main/about"}
        >
          About
        </NavLink>
      </div>

      <div className="flex items-center gap-6">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          }
          to={"/main/cart"}
        >
          <ShoppingCart />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-white font-semibold" : "text-gray-200"
          }
          to={"/main/orders"}
        >
          <Box />
        </NavLink>

        <button className="px-5 py-1 rounded cursor-pointer text-white bg-red-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
