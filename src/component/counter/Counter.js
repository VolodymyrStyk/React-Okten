import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export const Counter = () => {
    const counter = useSelector((state) => state);
    console.log(counter);
    const dispatch = useDispatch();
    const [value, setValue] = useState();

    return (
        <div>
            <h1>{
                counter.map(value=><div>{value}</div>
                )
            }</h1>
            <input type="text" value={value} onChange={
                ({target: {value}}) => {
                    setValue(value);
                }
            }/>
            <div>
                <button onClick={() => {
                    dispatch({type: 'ADD'})
                }}>Add
                </button>

            </div>
        </div>
    )
}