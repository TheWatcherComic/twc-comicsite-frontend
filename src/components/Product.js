import React, { useContext,useState,useEffect } from 'react'
import ComicData from '../COMICS.json';
import { Price } from './Price';
import {CartContext} from "../context/cartContext";


const ProductShow = (props) => {

    var id = Number(props.children);

    const [ComicData, setComics2] =  useState(null);

    useEffect(() => {
        const fetchComics = async () => {
                const { data } = await axios.post('http://localhost:5000/api/comicData',{idComic: props.children});
              //  setComics2(info.data)
            //const info = await res.json();
            //console.log(info.data);
            setComics2(data.data)
        }
        fetchComics()
    }, [])

    let newarray = ComicData[0];

    const {addItemToCart} = useContext(CartContext);

  return (
    <div className='py-6 px-0 sm:p-6 md:py-10 md:px-40'>
        {ComicData?(<div class="flex flex-col justify-center  md:flex-row md:gap-x-5">
            <div className="flex items-center md:shrink-0 ">
                <div className="w-full object-cover md:w-72 lg:w-96 rounded-lg md:rounded-lg">
                    <img src={ComicData[0].com_picture} alt="" class="drop-shadow-lg md:drop-shadow-lg" loading="lazy" />
                </div>
            </div>
            <div className="flex flex-col justify-center mx-5">
                <div className="flex">
                    <h1 className='mt-5 text-xl font-bold text-slate-900 md:text-4xl dark:text-white'>{ComicData[0].com_name}</h1>
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
                        <button onClick={()=>addItemToCart(newarray)} type="button" class="bg-red-500 hover:bg-red-400 text-white text-sm leading-6 font-medium py-2 px-3 w-24 md:w-44 rounded-lg">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>):null}
    </div>
  )
}

export default ProductShow
