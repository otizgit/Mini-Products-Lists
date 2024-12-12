import React from "react";
import ProductsContainer from "./ProductsContainer";

export default function ProductsWrapper({ cartProducts, setCartProducts }) {
  return (
    <div className="w-full">
      <h1 className="font-extrabold text-[2rem] text-rose900 mb-6">Desserts</h1>
      <ProductsContainer
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
    </div>
  );
}
