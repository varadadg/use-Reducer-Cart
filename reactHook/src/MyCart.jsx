import React from "react";

const MyCart = () => {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="h-72 w-72 bg-crown  focus:outline-none focus:ring focus:ring-violet-300 ... relative">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            Cart
          </p>
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-wine-500 hover:bg-wine text-white active:bg-wine focus:outline-none focus:ring focus:ring-wine">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
