import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LandingSection from "./components/LandingSection";
import MarvelLanding from "./components/LandingSection";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import Trending from "./components/Trending";

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Trending />
    <Sales />
    <LandingSection>Marvel</LandingSection>
    <LandingSection>DC</LandingSection>
    <Footer />
    </>
  );
}

export default App;
