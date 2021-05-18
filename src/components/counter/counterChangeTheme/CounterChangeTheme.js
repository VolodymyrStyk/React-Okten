import React, {useContext} from "react";
import {MyContext} from "../../../routes";

export const CounterChangeTheme = () => {
    const {color,changeTheme} = useContext(MyContext);
  return (
    <div >
            <button onClick={() => {
                changeTheme(color);
            }}  className={'button change-color'}>Change Color
                <span>🌞</span><span>🌚</span>
            </button>
    </div>
  );
}
