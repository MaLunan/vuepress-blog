import axios from 'axios';
// 172.21.0.17
// 创建axios实例
const service = axios.create({
  // baseURL:'https://zmln1021.cn:3000',//线上
  baseURL:window.location.hostname==='127.0.0.1'||window.location.hostname==='localhost'?'http://127.0.0.1:3000':'https://zmln1021.cn:3000',
  withCredentials: false,
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
      return response
  },
  error => {
    return Promise.reject(error)
  }
)
//获取信息
export const getblog=(theme)=>{
    return service.get('/getblog?theme='+theme);
}
//添加信息
export const addMsg=(theme)=>{
    return service(
        {
            method:"post",
            url:"/addblog",
            data:theme
        }
    )
}
//获取浏览量
export const getPv=(theme)=>{
    return service.get('/addpv?theme='+theme);
}