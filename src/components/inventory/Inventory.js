import './Inventory.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InventoryDetails from "../InventoryDetails/InventoryDetails";
import React from "react";


export default function Inventory({item, url, clear}) {


    console.log(item);
    return (
        <Router>
            <div className={'wrap-inventory'}>
                <div>{item.title}</div>
                <div>{item.category}</div>
                <div>{item.price}</div>
                <div>
                    <button ><Link to={url + '/' + item.id}>Show details</Link>
                    </button>
                    <Switch>
                        <Route exact={true} path={url + '/' + item.id}
                               render={() => {
                                   return <InventoryDetails items={item} clear={clear}/>
                               }}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}