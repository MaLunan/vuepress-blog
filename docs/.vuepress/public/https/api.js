import axios from 'axios';
// 172.21.0.17
export const getblog=(theme)=>{
    return axios.get('https://127.0.0.1:3000/getblog?theme='+theme);
}
export const addMsg=(theme)=>{
    return axios(
        {
            method:"post",
            url:"https://127.0.0.1:3000/addblog",
            data:theme
        }
    )
}