import React from 'react';
import ComicData from '../COMICS.json';

const Product = () => {

  return (
    <div className='py-6 px-0 sm:p-6 md:py-10 md:px-40'>
        <div class="flex flex-col md:flex-row md:gap-x-5">
            <div className="flex  md:shrink-0 ">
                <div className="w-full object-cover lg:w-96 rounded-lg md:rounded-lg">
                    <img src={ComicData[1].image} alt="" class="md:drop-shadow-lg" loading="lazy" />
                </div>
            </div>
            <div className="flex flex-col justify-center mx-5">
                <div className="flex">
                    <h1 className='mt-5 text-xl font-bold text-white sm:text-slate-900 md:text-4xl dark:sm:text-white'>{ComicData[1].title}</h1>
                </div>
                <div className="flex">
                    <p className='mt-5 text-base text-justify font-light text-white sm:text-slate-900 md:text-base dark:sm:text-white'>{ComicData[1].description}</p>
                </div>
                <div className="flex">
                <div class="text-amber-500 flex items-center grow dark:text-amber-500 mt-11">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-amber-500">
                        <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>{ComicData[1].starRating} <span class="text-slate-400 font-normal">(1)</span></span>
                    </div> 
                    <div className="flex mt-11">
                        <button type="button" class="bg-red-500 hover:bg-red-400 text-white text-sm leading-6 font-medium py-2 px-3 w-24 md:w-96 rounded-lg">BUY</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
