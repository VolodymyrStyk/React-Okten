import React, {createContext} from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {Counter} from "../components/counter/Counter";
const MyContext = createContext('');

export const Routes = () => {
    return (
        <div>
            <Router>
                <MyContext.P
                <Route path={'/'} component={Counter}/>
            </Router>
        </div>
    );
}
