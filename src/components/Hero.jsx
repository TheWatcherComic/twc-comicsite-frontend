import React from 'react'
import ComicData from '../COMICS.json';
import { useNavigate } from "react-router-dom";



const Hero = () => {
  let array = ComicData;
  let newarray = [];
  let randomNum = Math.floor((Math.random() * 4));
  array.forEach(array => {
    if(array.tag === "HOT"){
        newarray.push(array);
    }
});
const navigate = useNavigate();


const handleComicInfo = () =>{
    navigate("/comic-buy/" + newarray[randomNum].id);
}
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-neutral-100 dark:bg-zinc-800">
      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-6xl lg:gap-x-20 lg:grid-cols-2">
        <div class="relative z-10 p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{newarray[randomNum].title}</h1>
          <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">{newarray[randomNum].house}</p>
        </div>
        <div class="grid gap-4 col-start-1 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img src={newarray[randomNum].image} alt="" class="w-full h-96 object-cover rounded-lg sm:h-69 sm:col-span-full lg:col-span-full lg:object-contain drop-shadow-lg" loading="lazy" />
        </div>
        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt class="sr-only">Reviews</dt>
          <dd class="text-amber-500 flex items-center dark:text-amber-500">
            <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-amber-500">
              <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>{newarray[randomNum].starRating}</span>
          </dd>      
        </dl>
        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 text-justify dark:text-slate-400  lg:max-h-535 lg:max-h-240">
        {newarray[randomNum].description}
        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button  onClick={handleComicInfo}  type="button" class="bg-red-500 hover:bg-red-400 text-white text-sm leading-6 font-medium py-2 px-3 w-24 rounded-lg">BUY</button>
        </div>
        </p>
      </div>
    </div>
  )
}

export default Hero