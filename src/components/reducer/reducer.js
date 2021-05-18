export const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + action.payload,
            }
        case 'DEC':
            return {
                ...state,
                counter: state.counter - action.payload,
            }
        case 'RES':
            return {
                ...state,
                counter: 0,
                changeDigit: 1,
                digit:0
            }
        case 'SET_INIT':
            return {
                ...state,
                counter: action.payload,
            }
        case 'SET_COUNT':
            return {
                ...state,
                changeDigit: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}
