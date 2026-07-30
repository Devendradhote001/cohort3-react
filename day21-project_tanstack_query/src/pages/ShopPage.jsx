import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProduct, useProductApi } from "../hooks/productHooks";
import Filters from "../components/Filters";
import { getProductsDataApi } from "../api/productApi";

const ShopPage = () => {
  let { filteredProducts, filterProducts, isLoading } = useProduct();

  return (
    <div className="min-h-screen bg-black p-8">
      <Filters filterProducts={filterProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
