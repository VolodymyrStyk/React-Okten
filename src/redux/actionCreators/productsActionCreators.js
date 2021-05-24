import {SET_PRODUCTS, RESET_PRODUCTS_LOADING, SET_PRODUCTS_LOADING} from "../actionTypes";

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const setProductsLoading = () => ({type: SET_PRODUCTS_LOADING});
export const restProductsLoading = () => ({type: RESET_PRODUCTS_LOADING});
