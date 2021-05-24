import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING
} from '../actionTypes'

const initialState = {
    products: [],
    isProductLoading: false
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_PRODUCTS_LOADING:
            return {
                ...state,
                isProductLoading: true
            }
        case RESET_PRODUCTS_LOADING:
            return {
                ...state,
                isProductLoading: false
            }
        default:
            return state;
    }
}