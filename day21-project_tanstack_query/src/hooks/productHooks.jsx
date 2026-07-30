import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";
import { useEffect, useState } from "react";

export const useProductApi = () => {
  console.log("useProduct api rendering...");
  const [filteredProducts, setFilteredProducts] = useState(null);

  let { isPending, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
  });

  let filteredData;

  let filterProducts = (searchParams) => {
    filteredData = data.filter((val) =>
      val.title.toLowerCase().includes(searchParams.toLowerCase())
    );

    if (filteredData) {
      setFilteredProducts(filteredData);
    }
    console.log(filteredData);
  };

  useEffect(() => {
    setFilteredProducts(data);
  }, [data, filteredData]);

  return {
    isPending,
    data,
    error,
    filterProducts,
    filteredProducts,
  };
};

export const useProduct = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let getProducts = async () => {
    let data = await getProductsDataApi();
    setProductsData(data);
    setFilteredProducts(data);
    setIsLoading(false);
  };

  let filterProducts = (searchParams) => {
    let filteredData = productsData.filter((val) =>
      val.title.toLowerCase().includes(searchParams.toLowerCase())
    );

    if (filteredData) {
      setFilteredProducts(filteredData);
    }
    console.log(filteredData);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    productsData,
    setProductsData,
    isLoading,
    setIsLoading,
    filteredProducts,
    setFilteredProducts,
    filterProducts,
  };
};
