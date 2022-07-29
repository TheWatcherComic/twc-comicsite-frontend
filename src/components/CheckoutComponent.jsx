import React, { useState,useEffect} from 'react'
import {useParams } from "react-router-dom";
import {yappyUrl} from '../controller/payment-controller'
import {comicsInfo} from '../controller/comic-controller'
import {AppleBtt, PaypalBtt, VisaBtt} from './Buttons';
import { CheckoutCard } from './Card';

const CheckoutComponent = () => {

    const [YappyData, setYappy] =  useState(null);
    const [ComicData, setComics2] =  useState(null);
    let { id, precio} = useParams();

    useEffect(() => {
        const fetchComics = async () => { 

            setYappy(await yappyUrl(Number(precio),Number(id)));
            setComics2(await comicsInfo(Number(id)));  

        }; fetchComics();
    },[])


  return ( 
    <div className='h-full w-full flex flex-col mb-5 lg:flex-row lg:justify-center dark:text-white'>
        {YappyData && ComicData?( <><div className='py-6 px-0 flex flex-col lg:flex-row sm:p-6 md:py-10 md:px-40 '>
              <div className='flex flex-col justify-start  md:flex-row md:gap-x-5 '>
                  <div className='flex flex-col justify-center  px-5' id='titles'>
                      <h1 className='font-extrabold text-3xl'>Checkout</h1>
                      <CheckoutCard>{ComicData[0]}</CheckoutCard>
                      <div className='flex flex-row justify-start mt-5 pt-3 pb-3 bg-neutral-200 dark:bg-zinc-800 bg-cover bg-center rounded-lg' id='product-show'>
                          <div className='ml-3 pr-10 flex flex-col' id='product-content'>
                              <h1 className='ml-3 text-xl font-bold'>Total</h1>
                              <div className='flex flex-row justify-between text-base font-light'>
                                  <h1 className='ml-3'>${ComicData[0].com_price}</h1>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div><div className='flex flex-row justify-center mt-5 pb-96 lg:mt-10 pt-3 bg-neutral-200 dark:bg-zinc-800 bg-cover bg-center rounded-lg' id='product-show'>
                  <div className='p-5 flex flex-col h-56 w-full' id='product-content'>
                      <h1 className='text-xl font-bold mb-10'>Choose payment method</h1>
                      <div className='flex flex-col justify-center items-center text-base font-light'>
                          <button onClick={() => { window.location = YappyData.url; } } type="button" className='bg-[#1F4B92] text-white py-2 px-6 rounded-lg w-full hover:bg-blue-500 duration-500 flex flex-row items-center justify-center'><p className='mr-2'>Pay with</p>  <img src="https://www.fundacioncalicanto.org/wp-content/uploads/2021/12/rsz_yappy-big-logo-1.png" className='w-10' alt="yappy-logo" /> <p className='ml-2'>yappy</p> </button>
                          <div className='flex flex-col bg-neutral-300 dark:bg-zinc-700 mt-5 rounded-lg p-5'>
                              <div className='flex flex-col'>
                                  <h1 className='capitalize font-normal'>add promo code</h1>
                                  <input type="text" class="block border border-zinc-100 dark:border-zinc-700 w-full p-2 rounded mb-5 dark:bg-zinc-900 dark:text-white" name="promo" placeholder="####-####-####" />
                              </div>
                          </div>
                          <div className='flex flex-col bg-neutral-300 dark:bg-zinc-700 mt-5 rounded-lg p-5'>
                              <h1>Other payment methods</h1>
                              <PaypalBtt />
                              <AppleBtt />
                              <VisaBtt />
                          </div>
                      </div>
                  </div>
              </div></>):null}
</div>

 )
}

export default CheckoutComponent