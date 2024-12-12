import React, { useState } from "react";
import ProductsWrapper from "../src/components/ProductsWrapper";
import CartWrapper from "./components/CartWrapper";

export default function App() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div className="max-width p-5 lg:p-20">
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-start">
        <ProductsWrapper
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
        <CartWrapper
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      </div>
    </div>
  );
}
