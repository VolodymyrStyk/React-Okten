import {useContext} from "react";
import {MyContext} from "../../App";

export const SubChild = () => {

    return (
        <div>
            SubChild
            <h2>{useContext(MyContext).txt}</h2>
        </div>
    );
}
