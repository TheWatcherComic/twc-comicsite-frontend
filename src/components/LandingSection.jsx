import React from 'react'
import CardLanding from './Card';


const LandingSection = (titulo) => {
    let comicsInfo =[
        {id:"1",title:"Civil War II",starRating: "2.34" ,house:"Marvel",year: "2016",genre: "CrossOver",price:100, salePer:0,status:true, sale:false, tag: "HOT",image:"https://readcomicsonline.ru/uploads/manga/civil-war-ii-2016/chapters/1/01.jpg"},
        {id:"2",title:"Old Man Logan",starRating: "2.34" ,house:"Marvel",year: "2008",genre: "Apocalypse",price:53, salePer:75,status:true, sale:true,  tag: "SALE",image:"https://readcomicsonline.ru/uploads/manga/old-man-logan-2015/chapters/1/01.jpg"},
        {id:"3",title:"Devil’s reign ",starRating: "2.34" ,house:"Marvel",year: "2021",genre: "Politics",price:144, salePer:50,status:true, sale:false, tag: "NEW",image:"https://readcomicsonline.ru/uploads/manga/devils-reign-2021/chapters/1/01.jpg"},
        {id:"4",title:"Vision",starRating: "2.34" ,house:"Marvel",year: "2015",genre: "Family",price:113,salePer:50, newprice: 0,status: true, sale:true, tag: "SALE",image:"https://readcomicsonline.ru/uploads/manga/vision-directors-cut-2017/chapters/1/01.jpg"},
        {id:"5",title:"Secret Empire ",starRating: "2.34" ,house:"Marvel",year: "2015",genre: "Nazi",price:144,salePer:45, newprice: 0,status: true, sale:true, tag: "SALE",image:"https://readcomicsonline.ru/uploads/manga/secret-empire-2017/chapters/0/01.jpg"},
    
      ]; 
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40  ">
        <div className='flex flex-row justify-between items-end'>
            <h1 className='font-extrabold text-3xl mb-5 dark:text-white'>{titulo.children}</h1>
            <a className='font-extrabold text-sm mb-5 dark:text-red-500 text-red-500 hover:text-red-400 cursor-pointer transition duration-300'>See more..</a>
        </div>

        <div class="max-w-7xl mx-auto md:h-96 md:items-center flex flex-row overflow-x-auto gap-5 md:gap-10  scroll-smooth snap-x snap-mandatory  md:snap-x md:snap-mandatory ">
            
    {comicsInfo.map((comic)=>(
         <CardLanding>{comic}</CardLanding>  
    ))}
        </div>
    </div>
      
   
  )
}

export default LandingSection