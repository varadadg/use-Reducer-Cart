import React from "react";
import { useReducer } from "react";
import { Product } from "../assets/Products";
import cartReducer from "../cartReducer";
import Card from "./Card";
import MyCart from "../MyCart";

const Home = () => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const removeItem = (id) => {
    // Use filter to create a new array without the item with the specified ID

    dispatch({ type: "REMOVE ITEM", payload: id });
    console.log(cart.items, "cart items");
  };

  return (
    <div className="grid grid-cols-2 gap-4 ...">
      <div className="grid grid-cols-3 gap-4 ...">
        {Product.map((item) => (
          <div key={item.id}>
            <Card
              itemName={item.name}
              {...item}
              dispatch={dispatch}
              cart={cart}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 ...">
        <div className="box-border h-32 w-32 p-4 border-4 ...">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <ul>
            {cart.items.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.name}
                <button
                  className=" bg-crown"
                  onClick={() => removeItem(cartItem.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
