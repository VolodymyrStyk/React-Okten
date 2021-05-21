import {
    SET_POSTS,
    SET_POSTS_IS_LOADING,
    RESET_POSTS_IS_LOADING,
    SET_POSTS_ERROR,
    SET_COMMENTS_IS_LOADING,
    SET_COMMENTS,
    RESET_COMMENTS_IS_LOADING,
    SET_COMMENTS_ERROR
} from "./actionTypes";

export const setPostsIsLoading = () => ({type: SET_POSTS_IS_LOADING});
export const setPosts = (payload) => ({type: SET_POSTS, payload});
export const resetPostsIsloading = () => ({type: RESET_POSTS_IS_LOADING});
export const setPostsError = (payload) => ({type: SET_POSTS_ERROR, payload});

export const setCommentsIsLoading = () => ({type: SET_COMMENTS_IS_LOADING});
export const setComments = (payload) => ({type: SET_COMMENTS, payload});
export const resetCommentsIsloading = () => ({type: RESET_COMMENTS_IS_LOADING});
export const setCommentsError = (payload) => ({type: SET_COMMENTS_ERROR, payload});