import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Characters from "../components/characters/Characters";
import Inventories from "../components/Inventories/Inventories";
import React from "react";
import InventoryDetails from "../components/InventoryDetails/InventoryDetails";
import Character from "../components/character/Character";
import * as PropTypes from "prop-types";
import CharacterDetails from "../components/characterDetails/CharacterDetails";

const Routes = () => (
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
            <Route exact={true} path={'/'} render={() => <h2>Home Page</h2>}/>
            <Route exact={true} path={'/characters'}component={Characters}/>
            <Route exact={true} path={'/inventory'} component={Inventories}/>
            <Route exact={true} path={'/inventory/:id'} render={(props) => {
                return <InventoryDetails props={props}/>
            }}/>
            <Route exact={true} path={'/characters/:id'} render={(props) => {
                return <CharacterDetails props={props}/>
            }}/>
        </Switch>
    </Router>
)
export default Routes;