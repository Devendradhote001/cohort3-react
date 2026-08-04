import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="h-56 overflow-hidden bg-gray-100">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4">
        {/* Category */}
        <span className="mb-2 w-fit rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Brand */}
        <p className="mt-1 text-sm text-gray-500">
          Brand: <span className="font-medium">{product.brand}</span>
        </p>

        {/* Rating & Stock */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-yellow-500">⭐ {product.rating}</p>

          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.availabilityStatus}
          </span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <p className="text-2xl font-bold text-gray-900">${product.price}</p>
        </div>

        {/* Add To Cart Button */}
        <button className="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-white font-medium transition hover:bg-indigo-700 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
