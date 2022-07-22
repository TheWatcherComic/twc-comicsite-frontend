import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import LandingSection from "./LandingSection";
import { useContext } from "react";
import { authContext, useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Landing() {
  /*Esto se borrara cuando tengamos BD*/
  let pagetosend = [
    { titulo: "New Realeses", tag: "NEW" },
    { titulo: "Trending", tag: "HOT" },
    { titulo: "Sales", tag: "SALE" },
    { titulo: "Marvel", tag: "", house: "Marvel" },
    { titulo: "DC", tag: "", house: "DC" },
  ];

  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/sign-in");
  };
  console.log(user);

  return (
    <>
      <Navbar />
      <Hero />
      {pagetosend.map((sendp) => (
        <LandingSection>{sendp}</LandingSection>
      ))}
      <Footer />
    </>
  );
}

export default Landing;
