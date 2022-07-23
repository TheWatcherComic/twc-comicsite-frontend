import React from "react";
import Footer from "./Footer";
import ComicData from "../COMICS.json";
import ProductShow from "./Product";
import { AllCard } from "./Card";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";


const ComicBuy = (prop) => {
  let { id } = useParams();
  console.log(id);

  return (
    <>
      <Navbar />
      <ProductShow>{id}</ProductShow>
      <Cart />
      <Footer />
    </>
  );
};

export default ComicBuy;
