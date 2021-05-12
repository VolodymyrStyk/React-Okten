import axios from 'axios'

const option = {
    baseURL: "https://jsonplaceholder.typicode.com/";
}
const axiosInstace = axios.create(option);
const getUsers = () => {
    return axiosInstace.get('/users');
}
const getPosts = () =>{
    return axiosInstace.get('/posts');
}
