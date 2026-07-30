import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-zinc-900 border border-zinc-800 p-5 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-60 w-full rounded-xl bg-zinc-800"></div>

      {/* Title */}
      <div className="mt-5 h-6 w-3/4 rounded bg-zinc-800"></div>

      {/* Price */}
      <div className="mt-4 h-8 w-24 rounded bg-zinc-800"></div>

      {/* Stock */}
      <div className="mt-3 h-4 w-20 rounded bg-zinc-800"></div>

      {/* Quantity */}
      <div className="flex items-center gap-3 mt-6">
        <div className="h-10 w-10 rounded-lg bg-zinc-800"></div>
        <div className="h-6 w-8 rounded bg-zinc-800"></div>
        <div className="h-10 w-10 rounded-lg bg-zinc-800"></div>
      </div>

      {/* Button */}
      <div className="mt-6 h-12 w-full rounded-xl bg-zinc-800"></div>
    </div>
  );
};

export default ProductCardSkeleton;
