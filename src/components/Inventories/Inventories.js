import {useEffect, useState} from "react";
import {getInventories} from "../../services/api.service";
import './Inventories.css'
import Inventory from "../inventory/Inventory";

export default function Inventories() {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        getInventories().then(value => setInventories([...value.data]));
    }, []);
    return (

        <div>
            <div className={'wrap-inventories'}>
                {
                    inventories.map(value => <Inventory key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}