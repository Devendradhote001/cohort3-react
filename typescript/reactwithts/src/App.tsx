import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);
    setProductsData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default App;
