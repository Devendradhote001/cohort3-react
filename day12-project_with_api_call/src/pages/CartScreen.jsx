import React, { useContext } from "react";
import CartCard from "../components/cartCard";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);

  return (
    <div className="h-[95%] gap-4 text-6xl grid grid-cols-3">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
