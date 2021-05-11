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
        <div>
            <Router>
                <div><Link to={'/'}><button>Home</button></Link></div>
                <div><Link to={'/users'}><button>Users</button></Link></div>
                <div><Link to={'/posts'}><button>Posts</button></Link></div>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<div>No Posts</div>)}/>
                </Switch>
            </Router>
        </div>
    );
}

