import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  let { isCartOpen, cartItems } = useContext(MyStore);

  const [productsData, setProductsData] = useState([]);
  console.log(productsData);

  const getProductsData = async () => {
    try {
      let res = await axios("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div className="">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {productsData.map((elem) => {
            let isInCart = cartItems.find((val) => val.id === elem.id);

            return (
              <ProductCards key={elem.id} product={elem} isInCart={isInCart} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
