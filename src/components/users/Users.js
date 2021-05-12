import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.axios";

export const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])

    return(
        <div>
            {
                users.map(value => <div>
                    {value.id} - {value.name}
                </div>)
            }
        </div>
    )
}