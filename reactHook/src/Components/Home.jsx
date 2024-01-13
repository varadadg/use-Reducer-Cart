import React from "react";
import { useReducer } from "react";
import { Product } from "../assets/Products";
import cartReducer from "../cartReducer";
import Card from "./Card";
import MyCart from "../MyCart";

const Home = () => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });
  return (
    <div className="grid grid-cols-4 gap-4 ...">
      {Product.map((item) => {
        return (
          <div>
            <Card
              itemName={item.name}
              {...item}
              dispatch={dispatch}
              cart={cart}
            />
          </div>
        );
      })}
      <MyCart cart={cart} />
    </div>
  );
};

export default Home;
