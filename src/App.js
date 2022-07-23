import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import { MenuIcon } from "@heroicons/react/outline";
import Button from "./components/Button";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { CartProvider,  } from "./context/cartContext";
import Allcomics from "./components/AllComics";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import ComicBuy from "./components/ComicBuy";
import Register from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Cart from "./components/Cart";


function App() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "All Comics", link: "/all-comics" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
    <CartProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={
            <ProtectedRoute>
                <Landing />
              </ProtectedRoute>} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Landing />
              </ProtectedRoute>
            } />
            <Route path="/all-comics" element={
              <ProtectedRoute>
                <Allcomics />
              </ProtectedRoute>
            } />
            <Route path="/marvel" element={<Allcomics />} />
            <Route path="/dc" element={<ComicBuy />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
