import React from "react";
import { useEffect } from "react";
import cartReducer from "../cartReducer";
const Card = ({ id, name, desc, price, dispatch, cart }) => {
  const addToCart = () => {
    dispatch({
      type: "ADD ITEM",
      payload: { item: { id, name, desc, price } },
    });

    console.log(name, "clicked");
  };
  useEffect(() => {
    console.log("Cart State:", cart.items);
  }, [cart.items]);
  return (
    <div className="flex flex-row ">
      <div className="h-72 w-72 bg-crown hover:bg-pink-300 active:bg-crown focus:outline-none focus:ring focus:ring-violet-300 ... relative">
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          {name}
        </p>
        <button
          onClick={addToCart}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-wine-500 hover:bg-wine text-white active:bg-wine focus:outline-none focus:ring focus:ring-wine">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
