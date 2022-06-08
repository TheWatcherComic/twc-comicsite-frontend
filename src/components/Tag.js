import React from 'react'

const Tag = (props) => {
  console.log(props);

  let result = "";
  let style = "";
  if(props.children === "HOT"){
  result = "HOT!";
    style = "bg-red-200 text-red-700";
}
else if(props.children === "NEW"){
  result = "NEW!";
  style = "bg-green-200 text-green-700";
}
return (
         
  <div className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${style} rounded-full`} >
       {result}
  </div>
   
)
}

const TagSale = (props) => {
  return (
         
    <div class="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1  bg-amber-200 text-amber-700 rounded-full" >
         {props.children}
    </div>
     
  )
}



export {Tag, TagSale}