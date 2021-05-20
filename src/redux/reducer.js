import initialState from "./intialState";

// const initialState = {
//     toDoList: ['one','two']
// }

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'SAVE':
            return {
                ...state,
                toDoList: action.payload
            }
        case 'DELETE':
            return {
                ...state,
                toDoList: action.payload
            }
        case 'CHECKED':
            return {
                ...state,
                toDoList: action.payload
            }
        default:
            return state;
    }
}
export default reducer;