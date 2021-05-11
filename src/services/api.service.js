import axios from "axios";

let options = {
    baseURL: 'https://api.sampleapis.com/futurama',

};

let axiosInstance = axios.create(options);

const getCharacters = () => {
    return axiosInstance.get('/characters');
}
const getInventories = (id) => {
    return axiosInstance.get('/inventory');
}

export {
    getCharacters,getInventories,axiosInstance
}