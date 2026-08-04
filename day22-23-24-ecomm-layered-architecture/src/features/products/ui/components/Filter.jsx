import React from "react";
import { useAllCategories } from "../../hooks/useProductHooks";

const Filter = ({ search, setSearch, category, setCategory }) => {
  let { data, isPending, error } = useAllCategories();

  if (isPending) return <h1>Loading categories..</h1>;

  return (
    <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow md:flex-row">
      {/* Search */}
      <div className="w-full md:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      {/* Category Select */}
      <div className="w-full md:w-60">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        >
          <option value="">All Categories</option>

          {data.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
