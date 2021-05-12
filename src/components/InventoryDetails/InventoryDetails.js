import {useEffect, useState} from "react";
import {getInventories} from "../../services/api.service";
import "./InventoryDetails.css"

export default function InventoryDetails({props}) {
    const {match:{params:{id:itemId}}} = props;
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        getInventories().then(value => setInventories([...value.data]));
    }, []);
    const inventoryFilter = inventories.find(value => value.id === Number(itemId))
    return (
        <div className={'wrap-inventory-detail'}>
            <h3>Inventory Details:</h3>
            <h2>{inventoryFilter?.id}:{inventoryFilter?.title}</h2>
            <p>{inventoryFilter?.category}</p>
            <p>{inventoryFilter?.description}</p>
            <p>{inventoryFilter?.slogan}</p>
            <p>Price: {inventoryFilter?.price}; Stock: {inventoryFilter?.stock};</p>
        </div>
    );
}