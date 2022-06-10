import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import LandingSection from "./LandingSection";
import Navbar from "./Navbar";


function Landing() {
    /*Esto se borrara cuando tengamos BD*/
    let comicsInfo =[
        {id:"1",title:"The Infinity Gaunlet",starRating: "8.4" ,house:"Marvel",year: "1991",genre: "Apocalypse",price:25,salePer:25, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/infinity-gauntlet-19911992/chapters/1/01.jpg"},
        {id:"2",title:"Old Man Logan",starRating: "2.34" ,house:"Marvel",year: "2008",genre: "Apocalypse",price:53,salePer:75, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/old-man-logan-2015/chapters/1/01.jpg"},
        {id:"3",title:"Secret Empire ",starRating: "2.34" ,house:"Marvel",year: "2015",genre: "Nazi",price:144,salePer:45, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/secret-empire-2017/chapters/0/01.jpg"},
        {id:"4",title:"Vision",starRating: "2.34" ,house:"Marvel",year: "2015",genre: "Family",price:113,salePer:50, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/vision-directors-cut-2017/chapters/1/01.jpg"},
        {id:"5",title:"Civil War II",starRating: "2.34" ,house:"Marvel",year: "2016",genre: "CrossOver",price:100, salePer:0,status:true, tag: "HOT", sale:false,image:"https://readcomicsonline.ru/uploads/manga/civil-war-ii-2016/chapters/1/01.jpg"},
        {id:"6",title:"Dark Knight of Steel",starRating: "2.34" ,house:"DC",year: "2021",genre: "Medieval",price:53, salePer:0,status:true, tag: "NEW",sale:false,image:"https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/1/01.jpg"},
        {id:"7",title:"Devil’s reign ",starRating: "2.34" ,house:"Marvel",year: "2021",genre: "Politics",price:144, salePer:0,status:true, tag: "NEW",sale:false,image:"https://readcomicsonline.ru/uploads/manga/devils-reign-2021/chapters/1/01.jpg"},
        {id:"8",title:"Batman: The killing joke",starRating: "2.34" ,house:"DC",year: "1988",genre: "Gore",price:113, salePer:0,status:false, tag: "null",sale:false,image:"https://readcomicsonline.ru/uploads/manga/batman-the-killing-joke/chapters/the-killing-joke/01.jpg"},
      ];
      let pagetosend= [
          {comicinfo: comicsInfo,titulo: "New Realeses",tag: "NEW"},
          {comicinfo: comicsInfo,titulo: "Trending",tag: "HOT"},
          {comicinfo: comicsInfo,titulo: "Sales",tag: "SALE"},
          {comicinfo: comicsInfo,titulo: "Marvel",tag: "",house: "Marvel"},
          {comicinfo: comicsInfo,titulo: "DC",tag: "",house: "DC"},
        ];
  return (
    <>
        <Navbar />
        <Hero/>
        {pagetosend.map((comic)=>(
            <LandingSection>{comic}</LandingSection> 
        ))}
        <Footer />
    </>
  );
}

export default Landing;