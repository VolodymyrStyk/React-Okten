import React, {useEffect, useState} from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {getUsers} from "../services/api.axios";

export const Routes =()=>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]))
    },[])

    return(
        <div>
            {
                users.map(value => console.log(value))
            }
        </div>
    )
}
