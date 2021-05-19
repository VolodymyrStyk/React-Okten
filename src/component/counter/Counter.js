import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export const Counter = () => {
    const counter = useSelector((state) => state.counter);
    console.log(counter);
    const dispatch = useDispatch();
    const [value, setValue] = useState(5);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <input type="number" value={value} onChange={
                ({target: {value}}) => {
                    setValue(value);
                }
            }/>
            <div>
                <button onClick={() => {
                    dispatch({type: 'INC'})
                }}>Inc
                </button>
                <button onClick={() => {
                    dispatch({type: 'DEC'})
                }}>Dec
                </button>
                <button onClick={() => {
                    dispatch({type: 'RES'})
                }}>Reset
                </button>
                <button onClick={() => {
                    dispatch({type: 'INC_CST',payload: Number(value)})
                }}>Inc Custom
                </button>
            </div>
        </div>
    )
}