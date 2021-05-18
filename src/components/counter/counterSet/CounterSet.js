import {useContext} from "react";
import {MyContext} from "../../../routes";

export const CounterSet = () => {
    let {digit,changeCount} = useContext(MyContext);
  return (
      <div className={'wrap-counterStep'}>
          <input type="number" defaultValue={digit} name={'setIntialDigit'}/>
          <button onClick={() => {
              digit = Number(document.getElementsByName('setIntialDigit')[0].value);
              changeCount("SET_INIT", digit)
          }} className={'button'}>Set Counter
          </button>
      </div>
  );
}
