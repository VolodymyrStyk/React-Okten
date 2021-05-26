import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING, REMOVE_FROM_WISHLIST, ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST
} from '../actionTypes'

const initialState = {
    products: [],
    wishList: [],
    cart: [],
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
        case ADD_TO_WISHLIST:
            const {payload} = action;
            const alreadyExists = state.wishList.find();
            return {
                ...state,
                wishList: []
            }
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishList: []
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: []
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}