import {useContext} from "react";
import {MyContext} from "../../App";

export const SubChild = () => {
const changeText = useContext(MyContext).text;
    const theme = this;
    console.log('asd ' +theme);
    return (
        <div>
            SubChild
            <h2>{changeText}</h2>
        </div>
    );
}
