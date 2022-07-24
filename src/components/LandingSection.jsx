import React from 'react'
import {CardLanding} from './Card';
import ComicData from '../COMICS.json';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';

const LandingSection = (props) => {
    let array = ComicData;
    let arrtag = props.children.tag;
    let arrhouse = props.children.house;
    let newarray = [];
    

    array.forEach(array => {
        if(array.tag === arrtag || array.house === arrhouse){
            newarray.push(array);
        }
    });

    const slideLeft = (slideID) =>{
        var slider = document.getElementById(`${slideID}`)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = (slideID) =>{
        var slider = document.getElementById(`${slideID}`)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    
  return (
    
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40 ">
        <div className='flex flex-row justify-between items-end'>
            <h1 className='font-extrabold text-3xl mb-5 dark:text-white'>{props.children.titulo}</h1>
            
            <a className='font-extrabold text-sm mb-5 dark:text-red-500 text-red-500 hover:text-red-400 cursor-pointer transition duration-300'>See more..</a>
        </div>
        <div className='flex flex-row items-center justify-center gap-1 '>
            <button onClick={()=>slideLeft(props.children.titulo)} className='dark:bg-black/40 h-44 flex items-center rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:shadow-lg'>
                <ChevronDoubleLeftIcon className='dark:text-white w-10 mx-2' />
            </button>
            <div id={props.children.titulo}  className="max-w-7xl mx-auto h-96 md:h-96 md:items-center flex flex-row items-center overflow-x-auto gap-5 md:gap-10  scroll-smooth snap-x snap-mandatory  md:snap-x md:snap-mandatory ">
                {newarray.slice(-5).map((comic)=>(
                    <CardLanding >{comic}</CardLanding> 
                ))}
            </div>
            <button onClick={()=>slideRight(props.children.titulo)} className='dark:bg-black/40 h-44 flex items-center rounded-lg hover:bg-zinc-200  dark:hover:bg-zinc-900 hover:shadow-lg'>
                <ChevronDoubleRightIcon className='dark:text-white w-10 mx-2' />
            </button>
        </div>
    </div>
      
   
  )
}

export default LandingSection
