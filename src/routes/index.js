import React, {createContext} from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import {Counter} from "../components/counter/Counter";
export let MyContext = createContext('Default');

export const Routes = () => {
    return (
        <div>
            <Router>
                <MyContext.Provider value={''}>
                <Route path={'/'} component={Counter}/>
                </MyContext.Provider>
            </Router>
        </div>
    );
}
