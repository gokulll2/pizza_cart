// import logo from './logo.svg';
import React from "react";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
