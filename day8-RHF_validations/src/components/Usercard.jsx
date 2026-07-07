import React from "react";

const Usercard = ({ user, setToggle }) => {
  return (
    <div className="p-4 border border-white bg-black rounded flex flex-col gap-2">
      <div className="h-40 w-40">
        <img
          className="object-cover h-full w-full rounded-xl"
          src={user.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.contact}</p>
      </div>
      <div className="flex w-full justify-between gap-4">
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="bg-yellow-700 text-white py-2 px-3 rounded"
        >
          Update
        </button>
        <button className="bg-red-700 text-white py-2 px-3 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
