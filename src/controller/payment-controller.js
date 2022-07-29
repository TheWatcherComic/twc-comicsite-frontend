import {auth} from '../firebase';
import axios from 'axios';
import {YAPPYURL_ENDPOINT} from '../endpoints/endpoints';


const yappyUrl = async (price,id) => {

    const token = await auth.currentUser.getIdToken();

    const { data } = await axios.post(YAPPYURL_ENDPOINT,{subtotal:price,comicIds:id},{
        headers: { authorization: `Bearer ${token}`}});

    return (data);    
}


export {yappyUrl}