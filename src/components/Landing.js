import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import LandingSection from "./LandingSection";


function Landing() {
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
        <Hero/>
        {pagetosend.map((sendp)=>(
            <LandingSection>{sendp}</LandingSection> 
        ))}
        <Footer />
    </>
  );
}

export default Landing;