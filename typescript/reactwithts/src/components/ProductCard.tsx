import type { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2">
      {/* Product Image */}
      <div className="bg-gray-100 h-64 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="w-fit bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="mt-2 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
