import axios from 'axios';
// 172.21.0.17
export const getblog=(theme)=>{
    return axios.get('http://zmln1021.cn:3000/getblog?theme='+theme);
}
export const addMsg=(theme)=>{
    return axios(
        {
            method:"post",
            url:"http://zmln1021.cn:3000/addblog",
            data:theme
        }
    )
}