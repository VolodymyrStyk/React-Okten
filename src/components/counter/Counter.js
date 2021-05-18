import {reducer} from "../reducer/reducer";
import {useReducer} from "react";
import './Counter.css'

export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0, digit: 0, changeDigit: 1});
    let {counter, digit, changeDigit} = state;
    const changeCount = (action, digit) => {
        dispatch({type: action, payload: digit});
    }
    const onSubmit = (e) => {
        changeDigit = Number(e.target.setChangeDigit.value);
        console.log(changeDigit);
        dispatch({type: 'SET_COUNT', payload: changeDigit});
        e.preventDefault();
    }

    return (
        <div className={'wrap-counterApp'}>
            <div className={'wrap-counter'}>
                <div className={'counter-data'}>
                    Counter : {counter}
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <input type="number" defaultValue={digit} name={'setChangeDigit'}/>
                        <button className={'button'}>Change counter</button>
                    </form>
                </div>
                <div>
                    <input type="number" defaultValue={digit} name={'setIntialDigit'}/>
                    <button onClick={() => {
                        digit = Number(document.getElementsByName('setIntialDigit')[0].value);
                        changeCount("SET_INIT", digit)
                    }}  className={'button'}>Set Counter
                    </button>
                </div>
                <div>
                    <button onClick={() => {
                        changeCount("INC", changeDigit)
                    }}  className={'button'}>Inc + {changeDigit}
                    </button>
                    <button onClick={() => {
                        changeCount("DEC", changeDigit)
                    }}  className={'button'}>Dec - {changeDigit}
                    </button>
                    <button onClick={() => {
                        document.getElementsByName('setIntialDigit')[0].value = 0;
                        document.getElementsByName('setChangeDigit')[0].value = 0;
                        changeCount("RES")
                    }}  className={'button'}>Res
                    </button>
                </div>
            </div>
        </div>
    );
}
