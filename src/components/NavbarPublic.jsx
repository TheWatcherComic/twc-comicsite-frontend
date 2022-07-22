import React from 'react';
import {ReactComponent as Logo} from '../logo.svg';
import {MenuIcon} from '@heroicons/react/outline';
import Button from './Button';
import {useState} from 'react';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Allcomics from "./AllComics";
import Landing from "./Landing";
import SignIn from './SignIn';
import ComicBuy from './ComicBuy';
import { AuthProvider } from "../context/authContext";
import { useNavigate } from "react-router-dom";




const NavbarPublic = () =>{
  let Links =[
    { name: "HOME", link: "/" },
    { name: "All Comics", link: "/all-comics" },
  ]; 
  let [open,setOpen]=useState(false);

  const navigate = useNavigate();

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
              <li className="md:ml-8 text-base md:my-0 my-7 dark:text-white">
                <Link to="/sign-in">
                  Sign-in
                </Link>
              </li>
              <li className="md:ml-8 text-base md:my-0 my-7 dark:text-white">
                <Link to="/register">
                  <Button>Sign-up</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div></>
  )
}

export default NavbarPublic