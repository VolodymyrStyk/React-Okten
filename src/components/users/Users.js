import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.axios";
import './Users.css'
import {User} from "../user/User";

export const Users = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);
    return (
        <div>
            <h2>Users Page</h2>
            <div className={'users-wrap'}>{
                users.map(value => <User key={value.id} item={value} props={props}/>)
            }</div>
        </div>
    )
}
