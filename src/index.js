import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const toDo = {
    todo: ['asd']
}

const reducer = (state = toDo, action) => {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'RES':
            return {
                ...state,
                counter: 0
            };
        case 'INC_CST':

            return {

                ...state,
                counter: state.counter + action.payload
            };
        case 'ADD':
            console.log('s: ', state)
            const len = state.todo.length;
            console.log('len: ', len)
            return {
                ...state,
                todo: state.todo.push(action.payload)
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
store.subscribe(() => {
    console.log('tut', store.getState());
});


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
