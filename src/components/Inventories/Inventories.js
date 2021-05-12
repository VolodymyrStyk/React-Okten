import React, {useEffect, useState} from "react";
import {getInventories} from "../../services/api.service";
import './Inventories.css'
import Inventory from "../inventory/Inventory";

export default function Inventories(props) {
    const {match: {url}} = props;
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        getInventories().then(value => setInventories([...value.data]));
    }, []);
    return (
        <div>
            <h2>Inventories Page</h2>
            <div className={'wrap-inventories'}>
                {
                    inventories.map(value => <Inventory key={value.id} item={value} url={url}/>)
                }
            </div>
        </div>
    );
}