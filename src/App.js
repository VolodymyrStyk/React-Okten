import './App.css';
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
                <div><Link to={'/characters'}><button>Characters</button></Link></div>
                <div><Link to={'/inventory'}><button>Inventory</button></Link></div>
                <Switch>
                    <Route exact={true} path={'/'}/>
                    <Route exact={true} path={'/characters'}/>
                    <Route exact={true} path={'/inventory'}/>
                </Switch>
            </Router>
        </div>
    );
}

