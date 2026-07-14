import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyStore);

  return (
    <div className="bg-black rounded p-5 flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10 text-xl">
        <p onClick={() => setIsCartOpen(false)} className="cursor-pointer">
          Home
        </p>
        <p onClick={() => setIsCartOpen(true)} className="cursor-pointer">
          Cart
        </p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
