import React from "react";
import { ReactComponent as Logo } from "../logo.svg";
import { MenuIcon, HomeIcon, CollectionIcon, TemplateIcon, ChevronDownIcon } from "@heroicons/react/outline";
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
    { name: "EXPLORE", link: "/all-comics/"+0 },
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

  const handleDropDown =(prop)=>{
    var dropDown = document.getElementById(prop);
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
          <div className="cursor-pointer flex items-center justify-center dark:dark:text-white">
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
              className="h-5 w-5 dark:text-white hidden"
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
                className="md:ml-8 text-base md:my-0 my-7 dark:text-white hover:text-red-500"
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
            <li className="md:ml-8 text-base md:my-0 my-7 dark:text-white flex flex-row items-center hover:text-red-500 " onClick={()=>handleDropDown("dropDown")}>
              <p className="uppercase">{user.displayName || user.email}</p> <ChevronDownIcon className="w-5 ml-2 "/>
            </li>
            <li className="w-fit md:ml-8  text-base md:my-0 my-7 dark:text-white">
              <div className={`absolute right-10 z-20 w-56 py-2 mt-10 overflow-hidden bg-white rounded-md shadow-xl dark:bg-zinc-900 hidden`} id="dropDown">
                <a
                  href="#"
                  class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <img
                    class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                    src={user.photoURL || defaultPic}
                    alt="Profile Picture"
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
      <div class="">
      <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow dark:bg-zinc-800 border-t-2 dark:text-white border-zinc-200 dark:border-zinc-500"> 
          <div id="tabs" class="flex justify-between ">
            <a href="/home" class="w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-4 pb-4">
              <HomeIcon class="inline-block mb-1 h-7 w-10"/>
              <span class="tab tab-home block text-xs">Home</span>
            </a>
            <a href="/all-comics/0" class="w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-4 pb-4">
              <TemplateIcon class="inline-block mb-1 h-7 w-10" />
              <span class="tab tab-explore block text-xs">Explore</span>
            </a>
            <a href="/my-comics" class="w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-4 pb-4">
              <CollectionIcon class="inline-block mb-1 h-7 w-10" />
              <span class="tab tab-whishlist block text-xs">Library</span>
            </a>
            <a onClick={()=>handleDropDown("dropDown-bot")} class="w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-4 pb-4">
            <img
                    class="inline-block  object-cover mx-1 rounded-full mb-1 h-7 w-7 focus:border-2 focus:border-red-500"
                    src={user.photoURL || defaultPic}
                    alt="Profile Picture"
                  ></img>
              <span class="tab tab-account block text-xs">Account</span>
            </a>
          </div>
          <div className={`absolute right-2 z-20 bottom-24 w-56 py-2 mt-5 overflow-hidden bg-white rounded-md shadow-xl dark:bg-zinc-900 hidden`} id="dropDown-bot">
                <a
                  href="#"
                  class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  
                  <div class="mx-1">
                    <h1 class="text-sm text-right font-semibold text-gray-700 dark:text-gray-200">
                    {user.displayName || user.email}
                    </h1>
                    <p class="text-sm text-right text-gray-500 dark:text-gray-400">
                    {user.email}
                    </p>
                  </div>
                  <img
                    class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                    src={user.photoURL || defaultPic}
                    alt="Profile Picture"
                  ></img>
                </a>

                <hr class="border-gray-200 dark:border-zinc-500 " />

                <a
                  href="#"
                  class="block px-4 py-3 text-sm text-right text-gray-600 capitalize  transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  view profile
                </a>

                <hr class="border-gray-200 dark:border-zinc-500 " />

                <a
                  href="#"
                  class="block px-4  py-3 text-sm text-right text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Help
                </a>
                <button
                  onClick={handleLogout}
                  href="#"
                  class="block px-4 py-3 w-full text-right text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Sign Out
                </button>
              </div>
        </section>

      </div>
    </>
  );
};

export default Navbar;
