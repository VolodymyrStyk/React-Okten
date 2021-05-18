import {useContext} from "react";
import {MyContext} from "../../../routes";

export const CounterView = () => {
    const {counter} = useContext(MyContext);
    return (
        <div className={'counter-data'}>
            Counter : {counter}
        </div>
    );
}
