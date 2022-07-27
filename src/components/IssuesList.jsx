import React from 'react';
import {IssueCard, MyCard} from './Card';
import ComicData from '../COMICS.json';
import {useState, useEffect} from 'react';

const IssuesList = (props) => {

  const [searchTerm, setSeacrhTerm] = useState('');

  const [items,setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  var issuesAmount = ComicData[props.children].chapters;
  var send = [];
  

  for (let index = 1; index <= issuesAmount; index++) {
    send[index] = {"url": ComicData[props.children].urlImages + index +"/01.jpg", "number": index, "id":ComicData[props.children].id }
  }  

  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40">
    <div className="flex flex-col bg-neutral-100 dark:bg-black rounded-xl bg-center bg-cover lg:flex lg:flex-row md:justify-between items-center lg:max-w-7xl lg:mx-auto lg:py-10 lg:px-5 text-white" style={{backgroundImage: `url("${ComicData[props.children].image }")` }}>
        <h1 className='font-extrabold text-3xl mb-5 mt-5 justify-center backdrop-blur-3xl px-4 rounded-lg backdrop-brightness-50' >{ComicData[props.children].title}</h1>
        <div className='flex flex-col mb-5 mt-5 text-center backdrop-blur-3xl rounded-lg px-4 lg:text-right backdrop-brightness-50'>
          <h1 className='font-extrabold text-base justify-center'>Number of issues: {ComicData[props.children].chapters}</h1>
          <h1 className='text-base font-light justify-center'>{ComicData[props.children].house}</h1>
          <h1 className=' text-base  font-light justify-center'>{ComicData[props.children].year}</h1>
        </div>
    </div>
    <div class="max-w-7xl mx-auto h-full md:items-center py-10 px-5 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  overflow-y-auto gap-5 md:gap-10  scroll-smooth ">
      {send.map((comic)=>(
        <IssueCard>{comic}</IssueCard>
      ))}
    </div>
  </div>
  )
}

export default IssuesList;
