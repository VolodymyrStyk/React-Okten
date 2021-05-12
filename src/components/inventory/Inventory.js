import './Inventory.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InventoryDetails from "../InventoryDetails/InventoryDetails";
import React from "react";

export default function Inventory({item, url}) {
    return (
            <div className={'wrap-inventory'}>
                <div>{item.title}</div>
                <div>{item.category}</div>
                <div>{item.price}</div>
                <div>
                    <button ><Link to={url + '/' + item.id}>Show details</Link></button>
                </div>
            </div>
    );
}