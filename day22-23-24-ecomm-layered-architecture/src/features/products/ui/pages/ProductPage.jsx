import React from "react";
import {
  useAllProduct,
  useProductByCategory,
} from "../../hooks/useProductHooks";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  let { data, isPending, errors, search, setSearch } = useAllProduct();

  let {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) return <h1>Loading products...</h1>;

  return (
    <div>
      <Filter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productByCategory?.products.length
          ? productByCategory?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
