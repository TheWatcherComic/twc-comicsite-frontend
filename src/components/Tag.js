import React from 'react'

const Tag = (props) => {

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
else if(props.children === "SALE"){
  result = "SALE!";
  style = "bg-[#F1EB50] text-amber-700";
}
return (
         
  <div className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 ${style} rounded-full`} >
       {result}
  </div>
   
)
}




export default Tag