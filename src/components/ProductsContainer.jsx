import React from "react";
import productsData from "../assets/data";
import Products from "./Products";

export default function ProductsContainer({ cartProducts, setCartProducts }) {
  return (
    <div className="grid justify-center sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {productsData.map((productData, index) => {
        return (
          <Products
            key={index}
            name={productData.name}
            category={productData.category}
            price={productData.price}
            thumbnailImg={productData.image.thumbnail}
            desktopImg={productData.image.desktop}
            mobileImg={productData.image.mobile}
            tabletImg={productData.image.tablet}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        );
      })}
    </div>
  );
}
