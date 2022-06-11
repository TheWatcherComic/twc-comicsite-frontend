import React from 'react';
import {CardLanding,AllCard} from './Card';
import ComicList from "./ComicsList";


const AllComicList = () => {
  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40  ">
    <div className='flex flex-row justify-between items-end'>
        <h1 className='font-extrabold text-3xl mb-5 dark:text-white'>All comic list</h1>
    </div>
    <div class="max-w-7xl mx-auto h-full md:items-center py-10 px-5 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  overflow-y-auto gap-5 md:gap-10  scroll-smooth ">
    {ComicList.map((comic)=>(
        <AllCard>{comic}</AllCard> 
    ))}
    </div>
</div>
  
  )
}

export default AllComicList