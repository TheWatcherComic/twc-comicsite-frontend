import React from 'react'
import CardLanding from './Card';
import ComicList from "./ComicsList";



const LandingSection = (props) => {
    let array = ComicList;
    let arrtag = props.children.tag;
    let arrhouse = props.children.house;
    let newarray = [];
    

    array.forEach(array => {
        if(array.tag === arrtag || array.house === arrhouse){
            newarray.push(array);
        }
    });

  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40 ">
        <div className='flex flex-row justify-between items-end'>
            <h1 className='font-extrabold text-3xl mb-5 dark:text-white'>{props.children.titulo}</h1>
            <a className='font-extrabold text-sm mb-5 dark:text-red-500 text-red-500 hover:text-red-400 cursor-pointer transition duration-300'>See more..</a>
        </div>

        <div class="max-w-7xl mx-auto md:h-96 md:items-center flex flex-row overflow-x-auto gap-5 md:gap-10  scroll-smooth snap-x snap-mandatory  md:snap-x md:snap-mandatory ">

        {newarray.slice(-5).map((comic)=>(

            <CardLanding>{comic}</CardLanding> 
        ))}
        </div>
    </div>
      
   
  )
}

export default LandingSection