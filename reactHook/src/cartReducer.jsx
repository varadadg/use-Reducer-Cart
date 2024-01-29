import React from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD ITEM":
      return { ...state, items: [...state.items, action.payload.item] };

    case "REMOVE ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
  }
  return <div>cartReducer</div>;
};

export default cartReducer;
