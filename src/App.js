import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Characters from "./components/characters/Characters";
import Inventories from "./components/Inventories/Inventories";

export default function App() {
    return (
        <div>
            <Router>
                <div><Link to={'/'}>
                    <button>Home</button>
                </Link></div>
                <div><Link to={'/characters'}>
                    <button>Characters</button>
                </Link></div>
                <div><Link to={'/inventory'}>
                    <button>Inventory</button>
                </Link></div>
                <Switch>
                    <Route exact={true} path={'/'}/>
                    <Route exact={true} path={'/characters'} render={() => <Characters/>}/>
                    <Route exact={true} path={'/inventory'} render={() => <Inventories/>}/>
                </Switch>
            </Router>
        </div>
    );
}

