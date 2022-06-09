import React from 'react'
import Tag from './Tag';
import Star from './Star';
import Button from './Button';
import { Price,SalePrice,SaleTag } from './Price';

const CardLanding = (props) => {
  return (
    <div class="flex-none snap-always snap-start md:snap-always md:snap-start">
        <div class="flex flex-row max-w-xl md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg dark:bg-zinc-800 ">
            <img class="w-full max-h-80 md:h-auto object-cover md:w-48 rounded-l-lg md:rounded-none md:rounded-l-lg" src={props.children.image} alt="" />
            <div class="p-6 flex flex-col justify-start">
                <div className='flex flex-row justify-between'>
                    <h1 class="text-gray-900 text-xl mb-2 font-bold dark:text-white flex">{props.children.title}</h1>
                    <div>{props.children.status ? <Tag>{props.children.tag}</Tag> : ""}</div>
                </div>
                <h5 class="text-gray-900 text-sm mb-2 font-thin dark:text-whit">{props.children.year} | {props.children.house} </h5>
                <div className='max-w-[315px] max-h-[96px] md:max-w-[336px] md:max-h-[120px] md:overflow-hidden overflow-hidden'>
                    <p class="text-gray-700 text-base mb-4 font-light dark:text-white ">
                        This is a wider card with supportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupportingsupporting tewider card with supporting tewider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                </div>
                <div className='flex felx-row'>
                    <Star/><Star/><Star/><Star/><Star/>
                </div>
                {props.children.sale ? "" : <br/>}
                <div className='flex felx-row justify-end items-end gap-5 md:gap-0 w-full'>
                    {props.children.sale ? <SaleTag>{props.children.salePer}</SaleTag> : ""}
                    {props.children.sale ? <SalePrice>{props.children}</SalePrice> : <Price>{props.children}</Price> }    
                    <Button><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg></Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardLanding