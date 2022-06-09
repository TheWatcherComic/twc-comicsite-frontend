import React from 'react'
import CardLanding from './Card';


const Sales = () => {
    let comicsInfo =[
        {id:"1",title:"The Infinity Gaunlet",starRating: "8.4" ,house:"Marvel",year: "1991",genre: "Apocalypse",price:25,salePer:25, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/infinity-gauntlet-19911992/chapters/1/01.jpg"},
        {id:"2",title:"Old Man Logan",starRating: "2.34" ,house:"Marvel",year: "2008",genre: "Apocalypse",price:53,salePer:75, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/old-man-logan-2015/chapters/1/01.jpg"},
        {id:"3",title:"Secret Empire ",starRating: "2.34" ,house:"Marvel",year: "2015",genre: "Nazi",price:144,salePer:45, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/secret-empire-2017/chapters/0/01.jpg"},
        {id:"4",title:"Vision",starRating: "2.34" ,house:"Marvel",year: "2015",genre: "Family",price:113,salePer:50, newprice: 0,status: true,tag: "SALE",sale:true,image:"https://readcomicsonline.ru/uploads/manga/vision-directors-cut-2017/chapters/1/01.jpg"},
    
      ]; 
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40">
        <div className='flex flex-row justify-between items-end'>
            <h1 className='font-extrabold text-3xl mb-5 dark:text-white'>Sales🔥</h1>
            <a className='font-extrabold text-sm mb-5 dark:text-red-500 text-red-500 hover:text-red-400 cursor-pointer transition duration-300'>See more..</a>
        </div>
        <div class="max-w-7xl mx-auto md:h-96 md:items-center flex flex-row overflow-x-auto gap-5 md:gap-10 scroll-smooth snap-x snap-mandatory  md:snap-x md:snap-mandatory">
            
    {comicsInfo.map((comic)=>(
        comic.newprice = (comic.salePer / 100) * comic.price,
        
        <CardLanding>{comic}</CardLanding>

            
    ))}
        </div>
    </div>
      
   
  )
}

export default Sales