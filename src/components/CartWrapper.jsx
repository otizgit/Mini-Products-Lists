import React from "react";

export default function CartWrapper({ cartProducts, setCartProducts }) {
  let price;
  let modifiedPrice;
  let combinedPrice;
  let modifiedCombinedPrice;

  const calculateTotalInCart = () => {
    return cartProducts.reduce((sum, product) => sum + product.amount, 0);
  };

  const totalAmount = cartProducts
    .reduce((amount, product) => amount + product.amount * product.price, 0)
    .toLocaleString();

  const modifiedTotalAmount =
    totalAmount.length >= 4 ? `$${totalAmount}0` : `$${totalAmount}.00`;

  return (
    <div className="bg-white w-full lg:basis-[35rem] rounded-xl py-6 px-6">
      <h1 className="text-customRed font-bold text-[1.5rem] mb-3">
        {`Your Cart (${calculateTotalInCart()})`}
      </h1>
      {cartProducts.length ? (
        <div>
          <div className="mb-4">
            {cartProducts.map((product) => {
              price = product.price.toLocaleString();
              modifiedPrice =
                price.length === 3 ? `$${price}0` : `$${price}.00`;
              combinedPrice = (
                Number(product.price) * product.amount
              ).toLocaleString();
              modifiedCombinedPrice =
                combinedPrice.length === 3
                  ? `$${combinedPrice}0`
                  : `$${combinedPrice}.00`;

              const removeFromCart = () => {
                setCartProducts((prevProducts) =>
                  prevProducts.filter(
                    (cartProduct) => cartProduct.name !== product.name
                  )
                );
              };
              return (
                <div className="border-b-[0.1em] flex justify-between items-start py-4 border-rose100">
                  <div>
                    <h1 className="text-[0.9rem] text-rose900 font-medium mb-2">
                      {product.name}
                    </h1>
                    <div className="flex gap-3">
                      <p className="text-customRed font-semibold">
                        {product.amount}x
                      </p>
                      <p className="text-rose500 text-[0.9rem]">
                        {`@ ${modifiedPrice}`}
                      </p>
                      <p className="text-rose500 font-semibold text-[0.9rem]">
                        {modifiedCombinedPrice}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={removeFromCart}
                    className="p-[0.15em] rounded-full border-2 border-rose300"
                  >
                    <img src="../icon-remove-item.svg" alt="" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-rose900 text-[0.9rem] font-medium">
              Order Total
            </p>
            <h1 className="text-rose900 font-extrabold text-[1.4rem]">
              {`${modifiedTotalAmount}`}
            </h1>
          </div>
          <div className="bg-rose50 rounded-md py-3 mb-4 flex justify-center gap-2">
            <img src="../icon-carbon-neutral.svg" alt="" />
            <p className="text-rose500 font-medium text-[0.9rem]">
              This is a{" "}
              <span className="text-rose900 font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
            className="w-full hover:bg-[#8e290b] bg-customRed rounded-full text-rose50 font-medium 
          py-3 text-[0.9rem]"
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img
            className="w-[200px]"
            src="../illustration-empty-cart.svg"
            alt=""
          />
          <p className="text-[.9rem] text-rose500 font-semibold">
            Your added items will appear here
          </p>
        </div>
      )}

      <div className="fixed grid place-items-center inset-0 bg-[#00000057]">
        <div className="bg-rose50 p-5 rounded-md w-[500px]">
          <img className="mb-4" src="../icon-order-confirmed.svg" alt="" />
          <h1 className="text-rose900 mb-1 font-extrabold text-[2rem]">Order Confirmed</h1>
          <p className="text-rose500 text-[0.9rem] font-medium mb-4">We hope you enjoy your food</p>

        </div>
      </div>
    </div>
  );
}