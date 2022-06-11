import React from 'react'

const Price = (props) =>{
    return(
        <div>
            <div className='flex flex-col'><p className='dark:text-gray-400 line-through text-lg text-neutral-400 hidden' >$</p><p className='dark:text-white text-4xl'>${props.children.price}</p></div>
        </div>
    )

}
const SalePrice = (props) => {
   let newprice = (props.children.salePer / 100) * props.children.price;
  return (
    <div className='flex flex-col'>
        <p className='dark:text-gray-400 line-through text-lg text-neutral-400'>${props.children.price}</p><p className='dark:text-white text-4xl'>${newprice}</p>
    </div>
  )
}

const SaleTag = (props) => {
    return (
    <div className='grow' id="tag-discount">
        <div className='bg-[#F1EB50] hover:stroke-black hover:stroke-2 h-10 w-24 rounded-r-full -ml-6 flex items-center justify-center '><p className='justify-self-center text-black text-lg font-semibold'>-{props.children}%</p></div>
    </div>
    )
  }
  const newprice = (props) =>{
      
  }

export  {SalePrice,Price,SaleTag}

