import './Inventory.css'
import {Link} from "react-router-dom";


export default function Inventory({item}) {
    return (
        <div className={'wrap-inventory'}>
            <div>{item.title}</div>
            <div>{item.category}</div>
            <div>{item.price}</div>
            <div>
                <button><Link>Show details</Link></button>
            </div>
        </div>
    );
}