import React, {useEffect, useState} from "react";
import {getUsers} from "../../services/api.axios";
import {User} from "../user/User";
import "./Users.css"

export const Users = (props)=>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value.data.data]))
    }, [])
    return (
        <div>
            <div className={'wrap-users'}>
                {
                    users.map(value => <User key={value.id} item={value} props={props}/>)
                }
            </div>
        </div>
    )
}
