import React, {useEffect, useState} from "react";
import {axiosInstance, getUsers} from "../../services/api.axios";
import {User} from "../user/User";
import "./Users.css"
import {NavButtons} from "../../routes/navButtons/NavButtons";
import {Link} from "react-router-dom";

export const Users = (props) => {
    const [users, setUsers] = useState([]);
    let [counter, setCounter] = useState(1);
    const back = (counter) => {
        --counter;
        if (counter >= 1) {
            return setCounter(counter);
        }
    }
    const next = (counter) => {
        ++counter;
        if (counter <= 2) {
            return setCounter(counter);
        }
    }
    useEffect(() => {
        axiosInstance.get('/users?page=' + counter).then(value => setUsers([...value.data.data]))
    }, [counter])

    return (
        <div>
            <div className={'wrap-users'}>
                {
                    users.map(value => <User key={value.id} item={value} props={props}/>)
                }
            </div>
            <div>
                <Link to={{
                    pathname: `/users`,
                    search: `page=${counter}`
                }}>
                    <button onClick={() => back(counter)}>Back</button>
                </Link>
                <Link to={{
                    pathname: `/users`,
                    search: `page=${counter}`
                }}>
                    <button onClick={() => next(counter)}>Next</button>
                </Link>
            </div>
        </div>
    )
}
