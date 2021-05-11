import './Inventory.css'


export default function Inventory({item}) {
    return (
        <div className={'wrap-inventory'}>
            <div>{item.title}</div>
            <div>{item.category}</div>
            <div>{item.price}</div>
        </div>
    );
}