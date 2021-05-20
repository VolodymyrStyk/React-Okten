import {useDispatch, useSelector} from "react-redux";
import {CounterView} from "./counterView/CounterView";
import {CounterStandartButton} from "./counterStandartButton/CounterStandartButton";
import {CounterCustomChanging} from "./counterCustomChanging/CounterCustomChanging";
import {CounterResetButton} from "./counterRestButton/CounterResetButton";
import {CounterSetValue} from "./counterSetValue/CounterSetValue";
import './Counter.css'

export const Counter = () => {
    const state = useSelector(state => state);
    const {counter, customValue, initialValue} = state;
    const dispatch = useDispatch();

    const changeCustomValue = (event) => {
        const {target: {value}} = event;
        dispatch({type: 'SET_CUSTOM', payload: Number(value)})
    };
    const changeinitialValue = (event) => {
        const {target: {value}} = event;
        dispatch({type: 'SET_INITIAL', payload: Number(value)})
    };

    const changeCounter = (type, payload) => {
        dispatch({type, payload});
    };
    return (
        <div className={'wrap'}>
            <div className={'counter-wrap'}>
                <CounterView counter={counter}/>
                <CounterStandartButton changeCounter={changeCounter}/>
                <CounterCustomChanging
                    customValue={customValue}
                    changeCustomValue={changeCustomValue}
                    changeCounter={changeCounter}
                />
                <CounterSetValue
                    initialValue={initialValue}
                    changeinitialValue={changeinitialValue}
                    changeCounter={changeCounter}
                />
                <CounterResetButton changeCounter={changeCounter}/>
            </div>
        </div>
    );
}
