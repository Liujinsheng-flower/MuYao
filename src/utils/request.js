import axios from 'axios';
 const instance = axios.create({
    timeout:5000,
    baseURL:'https://net-music.penkuoer.com'
    // baseURL:'http://122.152.214.15:3000'
})
export  const  get=(url,params)=>instance.get(url,{params});

export const post=(url,data)=>instance.post(url,data);