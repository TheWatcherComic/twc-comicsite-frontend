import React from "react";
import Footer from "./Footer";
import ComicData from "../COMICS.json";
import ProductShow from "./Product";
import { AllCard } from "./Card";
import {useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";
import {ViewerC} from "./Viewer";


const Reader = () => {
  let { id, chapter} = useParams();
  let paramsSend = [id,chapter]
  console.log(id);


  return (
    <>
      <Navbar />
      <ViewerC>{paramsSend}</ViewerC>
    </>
  );
};

export default Reader;