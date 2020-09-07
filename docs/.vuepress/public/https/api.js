import axios from 'axios';

export const getblog=(theme)=>{
    return axios.get('http://127.0.0.1:3000/getblog?theme='+theme);
}
export const addMsg=(theme)=>{
    return axios(
        {
            method:"post",
            url:"http://127.0.0.1:3000/addblog",
            data:theme
        }
    )
}