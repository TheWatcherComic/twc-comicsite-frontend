import React, { useContext } from 'react'
import Tag from './Tag';
import Star from './Star';
import Button from './Button';
import { Price,SalePrice,SaleTag } from './Price';
import { useNavigate } from "react-router-dom";


const CardLanding = (props) => {
    var star = parseInt(props.children.com_starRating);
    var rating = []; 
    
    const navigate = useNavigate();


    const handleComicInfo = () =>{
        navigate("/comic-buy/" + props.children.com_id);
    }

    for (let index = 0; index < star; index++) {
        rating.push(<Star/>);
        
    }


  return (
    <div onClick={handleComicInfo} class="flex-none cursor-pointer md:cursor-default snap-always snap-start md:snap-always md:snap-start">
        <div class="flex flex-row w-[210px] md:w-full md:max-h-72 max-w-xl md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg dark:bg-zinc-800 relative ">
            <div  className='absolute -top-2 -right-2 lg:hidden '>
                <div>{props.children.status ? <Tag>{props.children.tag}</Tag> : ""}</div>
            </div>
            <div className=' bg-gradient-to-t rounded-lg from-black/100 via-black/75 to-black/1  lg:hidden w-full h-20 max-h-20 bottom-0 left-0 absolute flex flex-col justify-center '>
                <h1 class="text-white text-lg ml-2 font-bold dark:text-white flex lg:hidden">{props.children.com_name}</h1>
            </div>
            <img class="w-[210px] max-h-80 md:h-auto object-cover md:rounded-lg md:w-48 md:max-h-80 rounded-lg lg:rounded-r-none lg:rounded-l-lg" src={props.children.com_picture} alt="" />
            <div class="p-6 md:hidden lg:flex lg:flex-col justify-start hidden">
                <div className='flex flex-row justify-between'>
                    <h1 class="text-gray-900 text-xl mb-2 font-bold dark:text-white flex">{props.children.com_name}</h1>
                    <div>{props.children.status ? <Tag>{props.children.tag}</Tag> : ""}</div>
                </div>
                <h5 class="text-gray-900 text-xs mb-2 font-thin dark:text-white">{props.children.com_year} | {props.children.com_house} </h5>
                <div className='w-[315px] h-[96px] md:max-w-[336px] md:max-h-[120px] md:overflow-hidden overflow-hidden'>
                    <p class="text-gray-700 text-base mb-4 font-light dark:text-white ">
                        {props.children.com_description}
                    </p>
                </div>
                <div className='flex felx-row'>
                    { rating }
                </div>
                {props.children.com_descountCheck ? "" : <br/>}
                <div className='flex felx-row justify-end items-end gap-5 md:gap-0 w-full'>
                    {props.children.com_descountCheck ? <SaleTag>{props.children.com_descountValue}</SaleTag> : ""}
                    {props.children.com_descountCheck ? <SalePrice>{props.children}</SalePrice> : <Price>{props.children}</Price> }  
                    <button onClick={handleComicInfo} className='bg-red-500 text-white py-2 px-6 rounded-lg md:ml-8 hover:bg-red-400 duration-500'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg></button>
                </div>
            </div>
        </div>
    </div>
    
  )
}
const AllCard = (props) => {
    const navigate = useNavigate();
    const handleComicInfo = () =>{
        navigate("/comic-buy/" + props.children.com_id);
    }
  return (
    <a onClick={handleComicInfo} class="flex flex-col drop-shadow-xl rounded-lg md:min-h-80 lg:w-52 cursor-pointer relative ">
        
        <div className='absolute ml-6 -top-4 -right-3 z-10'>
            {props.children.status ? <Tag>{props.children.tag}</Tag> : ""}
        </div>
        <div className="relative">
            <img class="w-full max-h-80 md:h-auto object-cover lg:w-52 rounded-lg md:rounded-lg" loading="lazy" src={props.children.com_picture} alt="" />
            <div className='absolute ml-6 bottom-5 left-0'>
            {props.children.com_descountCheck ? <SaleTag>{props.children.com_descountValue}</SaleTag> : ""}
        </div>
        </div>
        <div className='pl-2 pt-2'>
            <h1 class="text-gray-900 lg:text-sm text-base mb-2 font-bold dark:text-white  " >{props.children.com_name}</h1>
        </div>
        <div className='flex flex-row justify-between items-center px-2'>
            <h1 class="text-gray-900 text-base mb-2 font-light dark:text-white">${parseFloat(props.children.com_price).toFixed(2)}</h1>
            <dd class="text-amber-500 flex mb-2 items-center dark:text-amber-500">
                <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-amber-500"><path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <span>{parseFloat(props.children.com_starRating).toFixed(2)}</span>
            </dd> 
        </div>
    </a>
  )
}

const MyCard = (props) => {
    const navigate = useNavigate();
    const handleMyComic = () =>{
        navigate("/issues/" + props.children.com_id);
    }
    //navigate("/reader/" + props.children.com_id +"/" +1);
  return (
    <a onClick={handleMyComic} class="flex flex-col drop-shadow-xl rounded-lg md:min-h-80 lg:w-52 cursor-pointer relative ">
        <img class="w-full max-h-80 md:h-auto object-cover lg:w-52 rounded-lg md:rounded-lg" src={props.children.com_picture} alt="" />
        <div className='pl-2 pt-2'>
            <h1 class="text-gray-900 lg:text-sm text-base mb-2 font-bold dark:text-white  " >{props.children.com_name}</h1>
        </div>
        <div className='flex flex-row justify-between items-center px-2'>
        <h1 class="text-gray-900 text-base mb-2 font-light dark:text-white">Issues: {props.children.com_chapter}</h1>
            <dd class="text-amber-500 flex mb-2 items-center dark:text-amber-500">
                <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-amber-500"><path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <span>{parseFloat(props.children.com_starRating).toFixed(2)}</span>
            </dd> 
        </div>
    </a>
  )
}
const IssueCard = (props) => {
    const navigate = useNavigate();
    const handleMyComic = () =>{
        navigate("/reader/" + props.children.id +"/" +props.children.number);
    }
  return (
    <a onClick={handleMyComic} class="flex flex-col drop-shadow-xl rounded-lg md:min-h-80 lg:w-52 cursor-pointer relative ">
        <img class="w-full max-h-80 md:h-auto object-cover lg:w-52 rounded-lg md:rounded-lg" src={props.children.url} alt={props.children.number} loading="lazy"/>
        <div className=' bg-gradient-to-t rounded-lg from-black/100 via-black/75 to-black/1  w-full h-20 max-h-20 bottom-0 left-0 absolute flex flex-col justify-center '>
                <h1 class="text-white text-lg ml-2 font-bold dark:text-white flex">Issue #{props.children.number}</h1>
            </div>
    </a>
  )
}
const CheckoutCard = (props) => {
  return (
    <div className='flex flex-row justify-start mt-5 pt-3 pb-3 bg-neutral-200 dark:bg-zinc-800 bg-cover bg-center rounded-lg' id='product-show'>
        <img src={props.children.com_picture} className='w-20 ml-3' />
        <div className='ml-3 pr-10 flex flex-col w-full' id='product-content'>
            <div className='flex flex-col'>
            <h1 className='ml-3 text-xl font-bold'>{props.children.com_name}</h1>
            <h1 className='ml-3 text-sm font-extralight mb-10'>{props.children.com_house}</h1>
            </div>
            <div className='flex flex-row justify-between text-base font-light'>
                <h1 className='ml-3'>X1</h1>
                <h1 className='ml-3'>${props.children.com_price}</h1>
            </div>

        </div>
    </div>
  )
}

export  {CardLanding,AllCard,MyCard, IssueCard,CheckoutCard}