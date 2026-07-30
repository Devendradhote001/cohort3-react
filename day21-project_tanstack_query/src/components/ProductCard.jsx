import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full max-w-sm rounded-2xl bg-zinc-900 border border-zinc-800 p-5 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500 transition-all duration-300">
      {/* Product Image */}
      <div className="h-60 w-full bg-zinc-800 rounded-xl overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="mt-5">
        <h2 className="text-lg font-semibold text-white line-clamp-1">
          {product.title}
        </h2>

        <p className="mt-2 text-2xl font-bold text-green-400">
          ${product.price}
        </p>

        <p className="mt-1 text-sm text-zinc-400">
          Stock:{" "}
          <span className="text-green-400 font-medium">{product.stock}</span>
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-5">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="w-10 h-10 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition"
          >
            -
          </button>

          <span className="w-10 text-center text-lg font-semibold text-white">
            {quantity}
          </span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
