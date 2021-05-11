import axios from "axios";

let axiosImageInstance = axios.create({
    baseURL: 'https://picsum.photos'
});

export const getRandomImage = () => axiosImageInstance.get('/200');

