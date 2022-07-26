import React from 'react';
import {IssueCard, MyCard} from './Card';
import ComicData from '../COMICS.json';
import {useState, useEffect} from 'react';
import {auth} from '../firebase';

const IssuesList = (props) => {

  const [searchTerm, setSeacrhTerm] = useState('');

  const [items,setItems] = useState([]);
  const [visible, setVisible] = useState(3);
  const [ComicData1, setComics] =  useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const token = await auth.currentUser.getIdToken();
        const res = await fetch('https://the-watcher-comic-backend.herokuapp.com/api/comics', {
            method: 'POST',
            headers: {
              authorization: `Bearer ${token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
        });
        const info = await res.json();
        //console.log(info.data);
        setComics(info.data)
    }
    fetchComics()
}, [])

  var issuesAmount = ComicData[props.children].chapters;
  var send = [];
  

  for (let index = 1; index <= issuesAmount; index++) {
    send[index] = {"url": ComicData[props.children].urlImages + index +"/01.jpg", "number": index, "id":ComicData[props.children].id }
  }

  var styleDiv = `flex flex-col bg-neutral-100 dark:bg-black rounded-xl bg-center bg-cover  bg-[url('${ComicData[1].image} ')] lg:flex lg:flex-row md:justify-between items-center lg:max-w-7xl lg:mx-auto lg:py-10 lg:px-5`
  

  return (
    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-40">
    <div className={styleDiv}>
        <h1 className='font-extrabold text-3xl mb-5 mt-5 justify-center backdrop-blur-3xl px-4 rounded-lg dark:text-white' >{ComicData[props.children].title}</h1>
        <div className='flex flex-col mb-5 mt-5 text-center backdrop-blur-3xl rounded-lg px-4 lg:text-right'>
          <h1 className='font-extrabold text-base justify-center dark:text-white'>Number of issues: {ComicData[props.children].chapters}</h1>
          <h1 className='text-base font-light justify-center dark:text-white'>{ComicData[props.children].house}</h1>
          <h1 className=' text-base  font-light justify-center dark:text-white'>{ComicData[props.children].year}</h1>
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