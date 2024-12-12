import React, { useState } from "react";

export default function Products(props) {
  const price = props.price.toLocaleString();
  const modifiedPrice = price.length === 3 ? `$${price}0` : `$${price}.00`;
  let productInCart;
  let amountInCart;

  const inCart = props.cartProducts.some(
    (products) => products.name === props.name
  );

  if (inCart) {
    productInCart = props.cartProducts.filter(
      (product) => product.name === props.name
    );
    amountInCart = productInCart[0].amount;
  }

  const addToCart = () => {
    const newProduct = {
      name: props.name,
      img: props.thumbnailImg,
      price: props.price,
      amount: 1,
    };
    props.setCartProducts([...props.cartProducts, newProduct]);
  };

  const increaseAmount = () => {
    props.setCartProducts((prevCartProducts) =>
      prevCartProducts.map((product) =>
        product.name === props.name
          ? { ...product, amount: product.amount + 1 }
          : product
      )
    );
  };

  const decreaseAmount = () => {
    props.setCartProducts((prevCartProducts) =>
      prevCartProducts.map((product) =>
        product.name === props.name
          ? {
              ...product,
              amount: product.amount < 2 ? product.amount : product.amount - 1,
            }
          : product
      )
    );
  };

  return (
    <div>
      <div
        className={`border-2 rounded-lg overflow-hidden ${
          inCart ? "border-customRed" : "border-rose50"
        }`}
      >
        <picture>
          <source srcSet={props.mobileImg} media="(max-width: 640px)" />
          <source srcSet={props.tabletImg} media="(max-width: 1200px)" />
          <source srcSet={props.desktopImg} media="(min-width: 1201px)" />
          <img
            className="w-full"
            src={props.thumbnailImg}
            alt="Image of product"
          />
        </picture>
      </div>
      <div className="-translate-y-5">
        <div className="mb-5 flex justify-center">
          {inCart ? (
            <div className="flex gap-2 bg-customRed border-2 border-customRed w-[150px] px-2 justify-between py-2 rounded-full">
              <button
                onClick={decreaseAmount}
                className="border-2 p-1 rounded-full"
              >
                <img src="../icon-decrement-quantity.svg" alt="" />
              </button>
              <p className="font-semibold text-[.85rem] text-rose50">
                {amountInCart}
              </p>
              <button
                onClick={increaseAmount}
                className="border-2 p-1 rounded-full"
              >
                <img className="" src="../icon-increment-quantity.svg" alt="" />
              </button>
            </div>
          ) : (
            <button
              onClick={addToCart}
              className="flex gap-2 bg-rose50 border-2 border-rose300 hover:border-customRed w-[150px] justify-center py-2
               rounded-full"
            >
              <img className="w-[20px]" src="../icon-add-to-cart.svg" alt="" />
              <p className="font-semibold text-[.85rem]">Add to Cart</p>
            </button>
          )}
        </div>
        <h1 className="text-rose500 font-medium text-[.85rem]">
          {props.category}
        </h1>
        <h2 className="text-rose900 font-bold text-[.9rem]">{props.name}</h2>
        <p className="text-customRed font-semibold text-[.9rem]">
          {modifiedPrice}
        </p>
      </div>
    </div>
  );
}
