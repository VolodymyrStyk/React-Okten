import {MyContext} from "../App";

export const SubChild = () => {
    return (
        <div>
            SubChild
            <MyContext.Consumer>
                {
                    (val)=>{
                        return <div>{val}!!!</div>
                    }
                }
            </MyContext.Consumer>
        </div>
    );
}
