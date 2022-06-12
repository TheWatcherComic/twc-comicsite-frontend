import React from 'react';
import {AllCard} from './Card';
import ComicData from '../COMICS.json';
import { useState } from 'react';

const AllComicList = () => {

  const [searchTerm, setSeacrhTerm] = useState('');

  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40  ">
    <div className=' flex flex-col   md:flex md:flex-row md:justify-between items-center lg:max-w-7xl lg:mx-auto lg:py-10 lg:px-5'>
        <h1 className='font-extrabold text-3xl dark:text-white'>All comic list</h1>
      <div class="flex justify-center">
        <div class="w-full sm:w-72 md:w-72 lg:w-96">
            <div class="input-group relative flex flex-row items-stretch w-full mb-4">
              <input type="text" onChange={event => {setSeacrhTerm(event.target.value)}} class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search!" aria-label="Search" aria-describedby="button-addon2"/>
            </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto h-full md:items-center py-10 px-5 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  overflow-y-auto gap-5 md:gap-10  scroll-smooth ">
        {ComicData.filter((val)=>{
          if (searchTerm === ""){
            return val;
          }else if (val.title.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || val.house.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
            return val;
          }
        }).map((val,key)=>{
          return(
            <AllCard>{val}</AllCard>
          )
        })}
    </div>
</div>
  
  )
}

export default AllComicList
