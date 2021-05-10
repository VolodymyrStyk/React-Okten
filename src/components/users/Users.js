import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css'

export default function Users() {
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });
    }, []);

    const search = (id) => {
        const checkedUser = users.find(value => value.id === id);
        console.log(checkedUser);
        setSingleUser(checkedUser);
    }

    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User
                        key={value.id}
                        item={value}
                        search={search}/>)
                }
            </div>
            <div className={'single-user-box'}>
                {
                    singleUser ? (<h2>{singleUser.id} -
                        {singleUser.username} <br/>
                        {singleUser.phone} <br/>
                        {singleUser.website} <br/>
                        {singleUser.company.name} <br/>
                        {singleUser.address.city} <br/>
                    </h2>) : (<p>User should be there</p>)
                }
            </div>
        </div>
    );
}