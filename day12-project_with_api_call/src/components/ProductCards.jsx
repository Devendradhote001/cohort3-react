import React, { useContext } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, isInCart }) => {
  let { setCartItems, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  const addToCart = () => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
    alert("Product added into cart");
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-sm text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        {isInCart ? (
          <button className="w-full bg-gray-600 flex items-center justify-center gap-5">
            <span
              onClick={() => decrementQuantity(product.id)}
              className="text-4xl"
            >
              -
            </span>{" "}
            <span className="text-4xl">{isInCart.quantity}</span>{" "}
            <span
              onClick={() => incrementQuantity(product.id)}
              className="text-4xl"
            >
              +
            </span>
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
