import logo from './logo.svg';
import './App.css';
import {Parent} from "./components/Parent/Parent";
import {createContext, useContext, useReducer, useState} from "react";

export let MyContext = createContext('Default')

const reducer = (state, action) => {
    switch (action.type)
        case:('CHANGE_TEXT'){
        return{
            ...state,

        }
    }
}

function App() {
    let [txt, setTxt] = useState('Hello');
    let [color, setColor] = useState('light');

    const [txt,color] = useReducer(reducer(state,action))

    let changeContext = (change) => {
        return dispatch(reducer(actichange);
    }

    return (
        <div>
            <div>
                <button onClick={() => {
                    return changeContext('How Are');
                }}>How Are
                </button>
                <button onClick={() => {
                    return changeContext('Hi');
                }}>Hi
                </button>
                <button onClick={() => {
                    return changeContext('Bye');
                }}>Bye
                </button>
            </div>
            <MyContext.Provider value={{txt, color}}>
                <Parent/>
            </MyContext.Provider>
            <div>
                <button onClick={() => {
                    return setColor(color === 'light' ? color = 'black' : color = 'light');
                }}>Change Color
                </button>
            </div>
        </div>
    );
}

export default App;
