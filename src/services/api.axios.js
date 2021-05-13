import React from "react";
import {
    useLocation
} from "react-router-dom";
import axios from 'axios'

const option = {
    baseURL: 'https://reqres.in/api',
}
const axiosInstance = axios.create(option);
const getUsers = () => {
    return axiosInstance.get('/users');
}
const getUnknown = () => {
    return axiosInstance.get('/unknown');
}
const getRegister = () => {
    return axiosInstance.get('/register');
}
const getLogin = () => {
    return axiosInstance.get('/login');
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export {
    axiosInstance, option, getUsers, getUnknown, getLogin, getRegister, useQuery
}