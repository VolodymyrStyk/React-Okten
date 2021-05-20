import intialState from "./initialState";

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'RES':
            return {
                ...state,
                counter: 0,
                customValue: 0,
                initialValue: 0
            }
        case 'INC_CUSTOM':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'DEC_CUSTOM':
            return {
                ...state,
                counter: state.counter - action.payload
            }
        case 'SET_CUSTOM':
            return {
                ...state,
                customValue: action.payload
            }
        case 'SET_INITIAL':
            return {
                ...state,
                initialValue: action.payload
            }
        case 'SET_COUNTER':
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state
    }
}

export default reducer;