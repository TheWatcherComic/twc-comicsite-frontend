import React from 'react'

const SaleTag = ({newprice}) => {
  return (
    <div className='grow' id="tag-discount">
        <div className='bg-[#F1EB50] h-10 w-24 rounded-r-full -ml-6 flex items-center justify-center '><p className='justify-self-center text-amber-700 text-lg font-semibold'>-{comic.salePer}%</p></div>
    </div>
  )
}

export default SaleTag