import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";
import './Users.css'

export default function Users() {

    const [users, setUsers] = useState([]);
    const [chosenUser, setChosenUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    const choseUser = (id) => {
        const findUser = users.find(value => value.id === id);
        setChosenUser(findUser);
        console.log(id+' user');
    }

    return (
        <div className={'wrap-users'}>
            <div>{
                users.map(value => <User
                    key={value.id}
                    item={value}
                    chosenUser={choseUser}
                />)
            }</div>
            <div className={'user-details'}>{
                chosenUser && <div>{chosenUser.id} - {chosenUser.email}</div>
            }</div>
        </div>
    );
}