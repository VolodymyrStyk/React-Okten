import {reducer} from "../reducer/reducer";
import React, {useReducer} from "react";
import './Counter.css'
import {CounterView} from "./counterView/CounterView";
import {MyContext} from "../../routes";
import {CounterStep} from "./counterStep/CounterStep";
import {CounterSet} from "./counterSet/CounterSet";
import {CounterControlButton} from "./counterControlButton/CounterControlButton";
import {CounterChangeTheme} from "./counterChangeTheme/CounterChangeTheme";



export const Counter = () => {

    const [state, dispatch] = useReducer(reducer,
        {counter: 0, digit: 0, changeDigit: 1, color: 'light'});
    let {counter, digit, changeDigit, color} = state;

    const changeCount = (action, digit) => {
        dispatch({type: action, payload: digit});
    }
    const onSubmit = (e) => {
        changeDigit = Number(e.target.setChangeDigit.value);
        console.log(changeDigit);
        dispatch({type: 'SET_COUNT', payload: changeDigit});
        e.preventDefault();
    }
    const  changeTheme = (color) => {
        return dispatch({
            type: 'CHANGE_COLOR',
            payload: color === 'light' ? color = 'black' : color = 'light'
        })
    }

    return (
        <div className={'wrap-counterApp'}>
            <MyContext.Provider value={{counter, digit, onSubmit, changeCount, changeDigit, color,changeTheme}}>
                <div className={`wrap-counter ${color}`}>
                    <CounterView/>
                    <CounterStep/>
                    <CounterSet/>
                    <CounterControlButton/>
                    <CounterChangeTheme/>
                </div>
            </MyContext.Provider>
        </div>
    );
}
