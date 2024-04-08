import React from "react";
import Header from "./Components/Header";
// import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Delivery from "./Components/Delivery";
import FoodSlider from "./Components/FoodSlider";
import OurFood from "./Components/OurFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import SignIn from "./Components/SignIn";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUS/>}/>
          <Route path="/toppicks" element={<FoodSlider/>}/>
          <Route path="/ourfood" element={<OurFood/>}/>
          <Route path="/signin" element={<SignIn/>}/>

         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
