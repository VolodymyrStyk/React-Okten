import {SET_PRODUCTS, RESET_PRODUCTS_LOADING, SET_PRODUCTS_LOADING} from "../actionTypes";

export const fetchProducts = (sortOptions) => async (dispatch) => {
    try {
        dispatch(setProductsLoading());
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        data.sort((a, b) => {
            if (sortOptions.order === 'ASC') {
                return a[sortOptions.field] - b[sortOptions.field];
            }
            return b[sortOptions.field] - a[sortOptions.field];
        })
        dispatch(setProducts(data));
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(resetProductsLoading());
    }
}

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
export const setProductsLoading = () => ({type: SET_PRODUCTS_LOADING});
export const resetProductsLoading = () => ({type: RESET_PRODUCTS_LOADING});
