import React from "react";
import { useProductApi } from "../hooks/productHooks";

const Filters = ({ filterProducts }) => {
  return (
    <div className="p-3 border w-full flex gap-6 rounded border border-gray-500">
      <div className="flex gap-8 w-full">
        <input
          onChange={(e) => filterProducts(e.target.value)}
          className="p-2 outline-0 border w-full rounded"
          type="text"
          placeholder="Search products..."
        />
        <button className="p-2 bg-white text-black rounded border-0">
          Search
        </button>
      </div>
      <div className=" ">
        <span>Select categories</span>
        <select className="p-2 bg-white text-black border-0 outline-0 rounded ">
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
