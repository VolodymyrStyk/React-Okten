import {useContext} from "react";
import {MyContext} from "../../../routes";

export const CounterControlButton = () => {
    const {changeCount,changeDigit} = useContext(MyContext);

  return (
      <div  className={'wrap-control-button'}>
          <button onClick={() => {
              changeCount("INC", changeDigit)
          }} className={'button'}>Inc + {changeDigit}
          </button>
          <button onClick={() => {
              changeCount("DEC", changeDigit)
          }} className={'button'}>Dec - {changeDigit}
          </button>
          <button onClick={() => {
              document.getElementsByName('setIntialDigit')[0].value = 0;
              document.getElementsByName('setChangeDigit')[0].value = 0;
              changeCount("RES")
          }} className={'button'}>Res
          </button>
      </div>
  );
}
