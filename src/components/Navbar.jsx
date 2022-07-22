import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import { MenuIcon } from "@heroicons/react/outline";
import Button from "./Button";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Allcomics from "./AllComics";
import Landing from "./Landing";
import SignIn from "./SignIn";
import ComicBuy from "./ComicBuy";
import { AuthProvider } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { authContext, useAuth } from "../context/authContext";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "All Comics", link: "/all-comics" },
  ];
  let [open, setOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="shadow-md w-full top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 dark:bg-black">
          <div className="cursor-pointer flex items-center dark:dark:text-white">
            <Link to="/home">
              <Logo className="h-10 m-0 p-0 w-40" />
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
          >
            <MenuIcon
              name={open ? "close" : "menu"}
              className="h-5 w-5 dark:text-white"
            />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0
        w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-19 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"
        } dark:bg-black`}
          >
            {Links.map((link) => (
              <li
                onClick={navigate(link.link)}
                key={link.name}
                className="md:ml-8 text-base md:my-0 my-7 dark:text-white"
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            <li class="md:ml-8 text-base md:my-0 my-7 dark:text-white">
              {user.displayName || user.email}
            </li>
            <li class="md:ml-8 text-base md:my-0 my-7 rounded-full">
              <img
                id="avatarButton"
                class="w-10 h-10 rounded-full border border-red-500"
                src={user.photoURL}
                alt="User dropdown"
              ></img>
              
            </li>

            <li className="md:ml-8 text-base md:my-0 my-7 dark:text-white">
              <button
                className="bg-red-500 text-white py-2 px-6 rounded-lg md:ml-8 hover:bg-red-400 duration-500"
                onClick={handleLogout}
              >
                Log-out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
