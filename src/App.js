import React from "react";
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import {ReactComponent as Logo} from './logo.svg';
import {MenuIcon} from '@heroicons/react/outline';
import Button from './components/Button';
import {useState} from 'react';
import Navbar from "./components/Navbar";


function App() {
    let Links =[
      {name:"HOME", link:"/"},
      {name:"NEW RELEASES", link:"/new-releases"},
      {name:"DC", link:"/dc"},
      {name:"MARVEL", link:"/marvel"},
    ]; 
    let [open,setOpen]=useState(false);
    return (
      <>
      <Navbar />
      </>
    
    )
}

export default App;
