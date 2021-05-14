import React, {useEffect, useState} from "react";
import {axiosInstance, getUsers} from "../../services/api.axios";
import {User} from "../user/User";
import "./Users.css"
import {NavButtons} from "../../routes/navButtons/NavButtons";
import {Link} from "react-router-dom";

export const Users = ({props,data}) => {
    console.log(props);
    console.log(data);
    let {page,total_pages,data:usersData} = data
    console.log(usersData);
    const [users, setUsers] = useState([usersData]);

    // const back = (counter) => {
    //     --counter;
    //     if (counter >= 1) {
    //         return setCounter(counter);
    //     }
    // }
    // const next = (counter) => {
    //     ++counter;
    //     if (counter <= 2) {
    //         return setCounter(counter);
    //     }
    // }
    useEffect(() => {
        axiosInstance.get('/users?page=' + data.page).then(value => setUsers([...value.data.data]))
    }, [data.page])

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
                    search: `page=${data.page}`
                }}>
                    <button onClick={() => --data.page}>Back</button>
                </Link>
                <Link to={{
                    pathname: `/users`,
                    search: `page=${data.page}`
                }}>
                    <button onClick={() => ++data.page}>Next</button>
                </Link>
            </div>
        </div>
    )
}
