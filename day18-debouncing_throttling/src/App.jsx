import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [scrollY, setScrollY] = useState(null);

  let throttle = false;

  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };

  let filteredData = () => {
    console.log("filter running..");
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };

  // debouncing....
  useEffect(() => {
    if (!searchData) return;

    let timeout = setTimeout(() => {
      filteredData();
    }, 700);

    return () => clearTimeout(timeout); //ye tab chlega jab new ayega or purana jaega
  }, [searchData]);

  // throttling....

  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log("scroll triggered...");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 10000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Debouncing...</h1>

      <input
        style={{ padding: "10px 30px" }}
        type="text"
        placeholder="Search products.."
        onChange={(e) => setSearchData(e.target.value)}
      />

      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
