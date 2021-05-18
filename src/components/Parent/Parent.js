import {Child} from "../Child/Child";
import {useContext, useState} from "react";
import {MyContext} from "../../App";
import './Parent.css'

export const Parent = () => {
    let color = useContext(MyContext).color;
    console.log(color)
    return (
        <div className={color}>
            Parent
            <Child/>
        </div>
    );
}
