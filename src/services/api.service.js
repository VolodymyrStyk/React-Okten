import axios from "axios";

const options = {
    baseURL: 'https://api.sampleapis.com/futurama',
};

const axiosInstance = axios.create(options);

const getCharacters = () => {
    return axiosInstance.get('/characters');
}
const getInventories = (id) => {
    return axiosInstance.get('/inventory');
}

export {
    getCharacters, getInventories, axiosInstance
}