import React, { useState,useEffect, useContext } from 'react'
import { Price } from './Price';
import {comicsInfo,userComics} from '../controller/comic-controller'
import {CartContext} from '../context/cartContext'
import { useNavigate } from "react-router-dom";


const ProductShow = (props) => {

    var id = Number(props.children);
    let check=false;

   
    const [ComicData, setComics2] =  useState(null);
    const [userData, setuserComics] =  useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchComics = async () => { 
            setuserComics(await userComics());
            setComics2(await comicsInfo(id));                    
        }; fetchComics();


    }, [])

    const {addItemToCart} = useContext(CartContext);

    //let newarray = ComicData? ComicData[0]:null ;
    

  return (
    <div className='py-6 px-0 sm:p-6 md:py-10 md:px-40'>
        {ComicData && userData?(<div class="flex flex-col justify-center  md:flex-row md:gap-x-5">
            {userData.forEach(element => {
                if(element.com_id == id){
                    check=true;
                }  
            })}
            <div className="flex items-center md:shrink-0 ">
                <div className="w-full object-cover md:w-72 lg:w-96 rounded-lg md:rounded-lg">
                    <img src={ComicData[0].com_picture} alt="" class="drop-shadow-lg md:drop-shadow-lg" loading="lazy" />
                </div>
            </div>
            <div className="flex flex-col justify-center mx-5">
                <div className="flex ">
                    <h1 className='mt-5 text-xl font-bold text-slate-900 md:text-4xl dark:text-white'>{ComicData[0].com_name}</h1>
                </div>
                <div className="flex">
                    <h2 className='mt-1 text-base font-light text-slate-900 dark:text-white'>{ComicData[0].com_house} | {ComicData[0].com_year}</h2>
                </div>
                <div className="flex">
                    <p className='mt-5 text-base text-justify font-light text-slate-900 md:text-base dark:text-white text-ellipsis overflow-hidden'>{ComicData[0].com_description}</p>
                </div>
                <div className="flex mt-11 gap-5">
                <div class="text-amber-500 flex items-center grow md:shrink-0 dark:text-amber-500">
                        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-amber-500">
                        <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>{parseFloat(ComicData[0].com_starRating).toFixed(2)}</span>
                    </div> 
                    <div className="flex">
                        <Price>{ComicData[0]}</Price>
                    </div>
                    <div className="flex ">
                        {!check?(<button onClick={ ()=>{ addItemToCart(ComicData[0]); navigate("/checkout/"+ComicData[0].com_id+"/"+ComicData[0].com_price)} } type="button"  class="bg-red-500 hover:bg-red-400 text-white text-sm leading-6 font-medium py-2 px-3 w-24 md:w-44 rounded-lg">Buy</button>):<button onClick={()=>{navigate("/my-comics")}} type="button"  class="bg-blue-500 hover:bg-blue-400 text-white text-sm leading-6 font-medium py-2 px-3 w-24 md:w-44 rounded-lg">My Library</button>}
                    </div>
                </div>
            </div>
        </div>):null}
    </div>
  )
}

export default ProductShow
