export const setToken=token=>{
    localStorage.setItem('token',token)
}
export const getToken=()=>{
    if(localStorage.getItem('token')){
        return localStorage.getItem('token');
    }else{
        return false;
    }
    
}
export const removeToken=()=>{
    localStorage.removeItem('token');
}
