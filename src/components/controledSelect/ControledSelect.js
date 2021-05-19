import {useEffect, useState} from "react";

export const ControledSelect = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
            });
    }, []);

    useEffect(() => {
        if (userId > 0) {
            fetch('https://jsonplaceholder.typicode.com/users/' + userId)
                .then(value => value.json())
                .then(value => {
                    setUser({...value});
                });
        }
    }, [userId]);

    const getUsersDetails = (e) => {
        e.preventDefault();
    };
    const onSelectChange = (e) => {
        let id = e.target.value;
        setUserId(id);
    };
    return (
        <div>
            <div>Without Reducer</div>
            <form onSubmit={getUsersDetails}>
                <select name="user" id="" onChange={onSelectChange}>
                    {
                        users.map(value => <option value={value.id}>
                            {value.name}
                        </option>)
                    }
                </select>
            </form>
            <div>{user && <div>{JSON.stringify(user)}</div> }</div>
        </div>
    );
}
