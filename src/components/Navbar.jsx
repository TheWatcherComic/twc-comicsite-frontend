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

  const handleDropDown =()=>{
    var dropDown = document.getElementById("dropDown");
    if(dropDown.classList.contains("block")){
      dropDown.classList.add("hidden");
      dropDown.classList.remove("block");
    }else if(dropDown.classList.contains("hidden")){
      dropDown.classList.add("block");
      dropDown.classList.remove("hidden");
    }
  };

  const handleButton = ()=>{

      alert('Hi there!');

  }

  
  const defaultPic =
    "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";

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
                key={link.name}
                className="md:ml-8 text-base md:my-0 my-7 dark:text-white"
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            <li className="w-fit md:ml-8 text-base md:my-0 my-7 dark:text-white">
              <div class="flex justify-center">
                <div class="relative inline-block ">
                  <button class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-black dark:border dark:border-zinc-900 focus:outline-none"
                  onClick={handleDropDown}
                  >
                    <span class="mx-1">{user.displayName || user.email}</span>
                    <svg
                      class="w-5 h-5 mx-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={`absolute right-10 z-20 w-56 py-2 mt-5 overflow-hidden bg-white rounded-md shadow-xl dark:bg-zinc-900 hidden`} id="dropDown">
                <a
                  href="#"
                  class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img
                    class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                    src={user.photoURL || defaultPic}
                    alt="jane avatar"
                  ></img>
                  <div class="mx-1">
                    <h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    {user.displayName || user.email}
                    </h1>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                    </p>
                  </div>
                </a>

                <hr class="border-gray-200 dark:border-zinc-500 " />

                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  view profile
                </a>

                <a
                  href="/my-comics"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  My Comics
                </a>
                <hr class="border-gray-200 dark:border-zinc-500 " />

                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Help
                </a>
                <button
                  onClick={handleLogout}
                  href="#"
                  class="block px-4 py-3 w-full text-left text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Sign Out
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
