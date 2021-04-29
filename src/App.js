import './App.css';
import User from "./components/user/user.component";
import {useState} from "react";

let usersList = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


function App() {
    let [getUser,setUser] = useState(usersList);

    let deleteFirstUser = () => {
        getUser.shift();
        setUser([...getUser]);
    }
    let deleteLastUser = () => {
        getUser.pop();
        setUser([...getUser]);
    }
    let deleteCurrentUser = (id) => {
        getUser.splice(id,1);
        setUser([...getUser]);
    }

    return (
        <div>
            <button onClick={deleteFirstUser}>Delete First User</button>
            <button onClick={deleteLastUser}>Delete last User</button>
            {
                getUser.map((value, index) =>
                    <User key={index} {...value} id = {index}/>
                )
            }
        </div>
    );
}

export default App;
