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



const Navbar = () =>{
  let Links =[
    {name:"NEW RELEASES", link:"/new-releases"},
    {name:"DC", link:"/dc"},
    {name:"MARVEL", link:"/marvel"},
  ]; 
  let [open,setOpen]=useState(false);
  return (
<></>
  )
}

export default Navbar