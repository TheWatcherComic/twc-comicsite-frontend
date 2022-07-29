import React from 'react'
import {CardLanding} from './Card';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline';
import {useState, useEffect} from 'react';
import {allComics} from '../controller/comic-controller'
import { useNavigate } from "react-router-dom";


const LandingSection = (props) => {
    
    const navigate = useNavigate();
    const [ComicData, setComics2] =  useState([]);

    let arrtag = props.children.tag;
    let arrhouse = props.children.house;
    let newarray = [];

    const slideLeft = (slideID) =>{
        var slider = document.getElementById(`${slideID}`)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = (slideID) =>{
        var slider = document.getElementById(`${slideID}`)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const handleAllComic = (divId) => {
        let id;
        switch(divId) {
            case 'New Realeses': id=1; break;
            case 'Trending': id=2; break;
            case 'Sales': id=3; break;
            case 'Marvel': id=4; break;
            case 'DC': id=5; break;
          }
        navigate("/all-comics/"+id);
    };


    useEffect(() => {
        const fetchComics = async () => { setComics2(await allComics()); }; fetchComics()
    }, [ComicData])
 
    let array = ComicData;
        
    array.forEach(array => {
        if(array.tag === arrtag || array.com_house === arrhouse){
            newarray.push(array);
        }
    })


    return(ComicData?(<div class="py-6 px-4 sm:p-6 lg:py-10 lg:px-40 "> 
                    <div className='flex flex-row justify-between items-end'>
                        <h1 className='font-extrabold text-3xl mb-5 dark:text-white'>{props.children.titulo}</h1>
                        
                        <a onClick={()=>handleAllComic(props.children.titulo)} className='font-extrabold text-sm mb-5 dark:text-red-500 text-red-500 hover:text-red-400 cursor-pointer transition duration-300'>See more..</a>
                    </div>

                    <div className='flex flex-row items-center justify-center gap-1 '>
                        
                        <button onClick={()=>slideLeft(props.children.titulo)} className='dark:bg-black/40 h-72 flex items-center rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:shadow-lg'>
                            <ChevronDoubleLeftIcon className='dark:text-white w-10 mx-2' />
                        </button>

                        <div id={props.children.titulo}  className="max-w-7xl mx-auto h-96 md:h-96 md:items-center flex flex-row items-center overflow-x-auto gap-5 md:gap-10  scroll-smooth snap-x snap-mandatory  md:snap-x md:snap-mandatory ">
                            {newarray.slice(-5).map((comic)=>(
                                <CardLanding >{comic}</CardLanding> 
                            ))}
                        </div>

                        <button onClick={()=>slideRight(props.children.titulo)} className='dark:bg-black/40 h-72 flex items-center rounded-lg hover:bg-zinc-200  dark:hover:bg-zinc-900 hover:shadow-lg'>
                            <ChevronDoubleRightIcon className='dark:text-white w-10 mx-2' />
                        </button>

                    </div> 
                </div>):null);

}

export default LandingSection
