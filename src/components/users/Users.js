import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css'
import axiosInstance from "../../services/api";


export default function Users() {
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState(null);
    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers([...value.data]))
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
                    singleUser ? (<div>
                        <h3>{singleUser.id} - {singleUser.username}</h3>
                        {singleUser.phone} <br/>
                        {singleUser.website} <br/>
                        {singleUser.company.name} <br/>
                        {singleUser.address.city} <br/>
                    </div>) : (<p>User should be there</p>)
                }
            </div>
        </div>
    );
}