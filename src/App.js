import logo from './logo.svg';
import './App.css';
import {Parent} from "./components/Parent/Parent";
import {createContext, useContext, useReducer, useState} from "react";

export let MyContext = createContext('Default')

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                ...state,
                text: action.payload
            };
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.payload
            };
    }


}

function App() {
    // let [txt, setTxt] = useState('Hello');
    // let [color, setColor] = useState('light');

    const [state, dispatch] = useReducer(reducer, {
        text: 'Hello',
        color: 'light'
    });
    let {text, color} = state;


    let changeContext = (change) => {
        return dispatch({type: 'CHANGE_TEXT', payload: change});
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
            <MyContext.Provider value={{text, color}}>
                <Parent/>
            </MyContext.Provider>
            <div>
                <button onClick={() => {
                    return dispatch({
                        type: 'CHANGE_COLOR',
                        payload: color === 'light' ? color = 'black' : color = 'light'
                    })
                }}>Change Color<span role="img" aria-label="sun">
            🌞
          </span>
                    <span role="img" aria-label="moon">
            🌚
          </span>
                </button>
            </div>
        </div>
    );
}

export default App;
