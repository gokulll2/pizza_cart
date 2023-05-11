// import logo from './logo.svg';
import React from "react";
// import Navigation from './Components/Navigation';
// import Home from './Components/Home'
import PizzaProducts from "./PizzaProducts";
import pizza from "./assets/pizza.png";

export default function Home() {
  return (
    <>
      {/* <p>Welcome to Home page</p> */}

      <div className="hero py-20">
        <div className="container mx-auto flex">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Are you hungry?</em>
            </h6>
            <h1 className="text-3xl md: text-6xl font-bold">Don't Wait !</h1>
            <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img className="w-4/5" src={pizza} />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <PizzaProducts />
      </div>
    </>
  );
}
