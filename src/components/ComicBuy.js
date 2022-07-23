import React from "react";
import Footer from "./Footer";
import ComicData from "../COMICS.json";
import ProductShow from "./Product";
import { AllCard } from "./Card";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import ViewerC from "./Viewer";


const ComicBuy = () => {
  let { id } = useParams();

  return (
    <>
      <Navbar />
      <ProductShow>{id}</ProductShow>
      <Footer />
    </>
  );
};

export default ComicBuy;
