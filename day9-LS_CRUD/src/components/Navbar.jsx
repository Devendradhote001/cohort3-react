import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 flex rounded items-center bg-black justify-between">
      <div>
        <img
          className="rounded-full"
          width={35}
          src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 bg-blue-700 text-white cursor-pointer rounded"
      >
        Create user
      </button>
    </div>
  );
};

export default Navbar;
