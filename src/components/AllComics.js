import React from "react";
import Footer from "./Footer";
import AllComicList from "./AllComicList";


function Allcomics(props) {
    /*Esto se borrara cuando tengamos BD*/
      let pagetosend= [
          {titulo: "New Realeses",tag: "NEW"},
          {titulo: "Trending",tag: "HOT"},
          {titulo: "Sales",tag: "SALE"},
          {titulo: "Marvel",tag: "",house: "Marvel"},
          {titulo: "DC",tag: "",house: "DC"},
        ];
  return (
    <>
        <AllComicList />        
        <Footer />
    </>
  );
}

export default Allcomics