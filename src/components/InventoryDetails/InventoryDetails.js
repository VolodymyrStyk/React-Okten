import {useEffect, useState} from "react";
import {getInventories} from "../../services/api.service";

export default function InventoryDetails({items}) {

    // console.log(props);
    const {title, category, description, slogan, price, stock, id} = items;
    return (
        <div>
            <h3>Inventory Details:</h3>
            <h2>{id}:{title}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>{slogan}</p>
            <p>Price: {price}; Stock: {stock};</p>
        </div>
    );
}