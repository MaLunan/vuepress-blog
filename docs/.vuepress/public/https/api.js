import axios from 'axios';

export const getblog=()=>{
    return axios.get('http://127.0.0.1:3000/getblog');
}