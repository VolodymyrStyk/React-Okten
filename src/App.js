import './App.css';
import Users from "./components/users/Users";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/'}>
                    <button>Home</button>
                </Link></div>
                <div><Link to={'/users'}>
                    <button>Users</button>
                </Link></div>
            </div>
            <div>
                <Switch>
                    <Route path={'/'}/>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                </Switch>
            </div>
        </Router>
    );
}

