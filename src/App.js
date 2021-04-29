import './App.css';
import User from "./components/user/user";
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
    let [users, setUsers] = useState(usersList);

    const deleteUser = () => {
        users.pop();
        console.log('click ');
        setUsers([...users]);
    };

    return (
        <div>
            {
                users.map((value, index) =>
                    <User key={index}
                          {...value}
                    />)
            }
            <button onClick={deleteUser}>delete User</button>
        </div>
    );
}

export default App;
