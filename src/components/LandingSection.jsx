import React from 'react'
import Tag from './Tag';
import Star from './Star';
import Button from './Button';
import { Price,SalePrice,SaleTag } from './Price';


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
        
                <div class="flex-none snap-always snap-start md:snap-always md:snap-start">
                    <div class="flex flex-row max-w-xl md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg dark:bg-zinc-800 ">
                        <img class="w-full max-h-80 md:h-auto object-cover md:w-48 rounded-l-lg md:rounded-none md:rounded-l-lg" src={comic.image} alt="" />
                        <div class="p-6 flex flex-col justify-start">
                            <div className='flex flex-row justify-between'>
                                <h1 class="text-gray-900 text-xl mb-2 font-bold dark:text-white flex">{comic.title}</h1>
                                <div>{comic.status ? <Tag>{comic.tag}</Tag> : ""}</div>
                            </div>
                            <h5 class="text-gray-900 text-sm mb-2 font-thin dark:text-whit">{comic.year} | {comic.house} </h5>
                            <div className='max-w-[315px] max-h-[96px] md:max-w-[336px] md:max-h-[120px] md:overflow-hidden overflow-hidden'>
                                <p class="text-gray-700 text-base mb-4 font-light dark:text-white ">
                                    This is a wider card with supportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupporting tewider card with supporting tewider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p>
                            </div>
                            <div className='flex felx-row'>
                                <Star/><Star/><Star/><Star/><Star/>
                            </div>
                            {comic.sale ? "" : <br/>}
                            <div className='flex felx-row justify-end items-end gap-5 md:gap-0 w-full'>
                                {comic.sale ? <SaleTag>{comic.salePer}</SaleTag> : ""}
                                {comic.sale ? <SalePrice>{comic}</SalePrice> : <Price>{comic}</Price> }    
                                    <Button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg></Button>
                            </div>
                        </div>
                    </div>
                </div>
            
    ))}
        </div>
    </div>
      
   
  )
}

export default LandingSection