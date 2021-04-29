import './App.css';
import User from "./components/user/user.component";
import {useState} from "react";

let usersList = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];


function App() {
    const [getUser,setUser] = useState(usersList);

    const deleteFirstUser = () => {
        getUser.shift();
        setUser([...getUser]);
    }
    const deleteLastUser = () => {
        getUser.pop();
        setUser([...getUser]);
    }
    const deleteCurrentUser = (id) => {
        setUser(getUser.filter(user => user.id !== id));
    }

    return (
        <div>
            <button onClick={deleteFirstUser}>Delete First User</button>
            <button onClick={deleteLastUser}>Delete last User</button>
            {
                getUser.map(value => <User key={value.id} {...value} deleteCurrentUser={deleteCurrentUser}/>)
            }
        </div>
    );
}

export default App;
