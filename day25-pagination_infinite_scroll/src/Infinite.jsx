import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
  let limit = 40;

  let { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getAllProducts(limit, pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPage) => {
        let loadedData = allPage.length * limit;
        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) return "loading...";

  console.log(data);

  let allProducts = data?.pages?.flatMap((val) => val.products) ?? [];

  return (
    <div className="flex p-5 flex-col gap-6 items-center">
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allProducts.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading.." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default Infinite;
