import React from 'react';
import {auth} from '../firebase';
import axios from 'axios';
import {ALLCOMICS_ENDPOINT , COMICINFO_ENDPOINT, STAGECOMIC_ENDPOINT} from '../endpoints/endpoints';


const AllComics = async () => {

    const token = await auth.currentUser.getIdToken();
    const { data } = await axios.get(ALLCOMICS_ENDPOINT,{
        headers: { authorization: `Bearer ${token}`,
                   Accept: 'application/json',
                  'Content-Type': 'application/json'}});

    return (data.data);
    
}

const ComicsTag = async (id) => {

    const token = await auth.currentUser.getIdToken();
    const { data } = await axios.post(STAGECOMIC_ENDPOINT,{stageId: id},{
        headers: { authorization: `Bearer ${token}`}});

    return (data.data);
    
}

const ComicsInfo = async (id) => {

    const token = await auth.currentUser.getIdToken();
    const { data } = await axios.post(COMICINFO_ENDPOINT,{idComic: id},{
        headers: { authorization: `Bearer ${token}`}});

    return (data.data);

}

const userComics = async () => {

    const token = await auth.currentUser.getIdToken();

    const { data } = await axios.post(ALLCOMICS_ENDPOINT,{},{ headers: { authorization: `Bearer ${token}`}});

    return (data.data);
    
}

export  {AllComics ,ComicsInfo,ComicsTag,userComics}