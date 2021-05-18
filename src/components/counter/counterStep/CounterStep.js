import {useContext} from "react";
import {MyContext} from "../../../routes";

export const CounterStep = () => {
    const {onSubmit, digit} = useContext(MyContext);
    return (
        <div className={'wrap-counterStep'}>
            <form onSubmit={onSubmit}>
                <input type="number" defaultValue={digit} name={'setChangeDigit'}/>
                <button className={'button'}>Counter Step</button>
            </form>
        </div>
    );
}
