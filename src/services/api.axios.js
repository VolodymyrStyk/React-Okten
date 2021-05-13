import axios from 'axios'

const option = {
    baseURL: 'https://reqres.in/api',
}
const axiosInstance = axios.create(option);
const getUsers = () => {
    return axiosInstance.get('/users');
}
const getUnknown = ()=>{
    return axiosInstance.get('/unknown');
}
const getRegister = ()=>{
    return axiosInstance.get('/register');
}
const getLogin = ()=>{
    return axiosInstance.get('/login');
}
export {
    axiosInstance, getUsers, getUnknown, getLogin, getRegister
}