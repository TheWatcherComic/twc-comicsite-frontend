import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./context/authContext";
import { CartProvider,  } from "./context/cartContext";
import Allcomics from "./components/AllComics";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import ComicBuy from "./components/ComicBuy";
import Register from "./components/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import Reader from "./components/Reader";
import MyComics from "./components/MyComics";
import Issues from "./components/Issues";
import MyProfile from "./components/MyProfile";

function App() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ALL COMICS", link: "/all-comics" },
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
            <Route path="/my-comics" element={
              <ProtectedRoute>
                <MyComics />
              </ProtectedRoute>
            } />
            <Route path={"/comic-buy/:id"}element={
              <ProtectedRoute>
                <ComicBuy />
              </ProtectedRoute>
            } />
            <Route path={"/reader/:id/:chapter"}element={
              <ProtectedRoute>
                <Reader />
              </ProtectedRoute>
            } />
            <Route path={"/issues/:id"}element={
              <ProtectedRoute>
                <Issues />
              </ProtectedRoute>
            } />
            <Route path={"/my-profile"}element={
              <ProtectedRoute>
                <MyProfile />
              </ProtectedRoute>
            } />
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
