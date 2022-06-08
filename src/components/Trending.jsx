import React from 'react'
import {Tag,TagHot,TagSale} from './Tag';
import Star from './Star';
import Button from './Button';


const Trending = () => {
    let comicsInfo =[
        {id:"1",title:"Civil War II",starRating: "2.34" ,house:"Marvel",year: "2016",genre: "CrossOver",price:100,status:true, tag: "HOT",image:"https://readcomicsonline.ru/uploads/manga/civil-war-ii-2016/chapters/1/01.jpg"},
        {id:"2",title:"Dark Knight of Steel",starRating: "2.34" ,house:"DC",year: "2021",genre: "Medieval",price:53,status:true, tag: "NEW",image:"https://readcomicsonline.ru/uploads/manga/dark-knights-of-steel-2021/chapters/1/01.jpg"},
        {id:"3",title:"Devil’s reign ",starRating: "2.34" ,house:"Marvel",year: "2021",genre: "Politics",price:144,status:true, tag: "NEW",image:"https://readcomicsonline.ru/uploads/manga/devils-reign-2021/chapters/1/01.jpg"},
        {id:"4",title:"Batman: The killing joke",starRating: "2.34" ,house:"DC",year: "1988",genre: "Gore",price:113,status:false, tag: "",image:"https://readcomicsonline.ru/uploads/manga/batman-the-killing-joke/chapters/the-killing-joke/01.jpg"},
    
      ]; 
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40 ">
        <h1 className='font-extrabold text-3xl mb-5 dark:text-white'>Trending📈</h1>

        <div class="max-w-7xl mx-auto flex flex-row overflow-x-auto gap-5">
            
    {comicsInfo.map((comic)=>(
        
                <div class="flex-none">
                    <div class="flex flex-row max-w-xl md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg dark:bg-zinc-800 ">
                        <img class=" w-full max-h-80 md:h-auto object-cover md:w-48 rounded-l-lg md:rounded-none md:rounded-l-lg" src={comic.image} alt="" />
                        <div class="p-6 flex flex-col justify-start">
                        <h1 class="text-gray-900 text-xl mb-2 font-bold dark:text-white flex">{comic.title} {comic.status ? <Tag>{comic.tag}</Tag> : ""}</h1>
                        <h5 class="text-gray-900 text-sm mb-2 font-thin dark:text-white">{comic.year} | {comic.house} </h5>
                        <p class="text-gray-700 text-base mb-4 font-light dark:text-white">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <div className='flex felx-row'>
                            <Star/><Star/><Star/><Star/><Star/>
                        </div>
                        <div className='flex felx-row justify-end items-end gap-5 md:gap-0'>
                            <div className='flex flex-col'><p className='dark:text-gray-400 line-through text-lg text-neutral-400 hidden' >$</p><p className='dark:text-white text-4xl'>${comic.price}</p></div>

                            <Button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg></Button>
                        </div>
                        </div>
                    </div>
                </div>
            
    ))}
        </div>
    </div>
      
   
  )
}

export default Trending