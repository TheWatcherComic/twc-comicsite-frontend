import React from "react";
import Footer from "./Footer";
import AllComicList from "./AllComicList";
import Navbar from "./Navbar";
import Cart from "./Cart";
import IssuesList from "./IssuesList";
import {useParams } from "react-router-dom";




function Issues(props) {
  let { id } = useParams();
  let paramsSend = [id]


  return (
    <>
      <Navbar />
      <IssuesList>{id}</IssuesList>
      <Footer />
    </>
  );
}

export default Issues;