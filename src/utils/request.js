import axios from 'axios';
 const instance = axios.create({
     baseURL:'/api'
    // baseURL:'https://net-music.penkuoer.com'
    // baseURL:'http://localhost:3000'
})
export  const  get=(url,params)=>instance.get(url,{params});

export const post=(url,data)=>instance.post(url,data);