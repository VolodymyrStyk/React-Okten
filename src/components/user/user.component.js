import {useState} from "react";
import App from "../../App";

export default function User(props) {
    let [getUserData, setUserData] = useState(props);

    let {name, age, status, id} = props;

    let userInfo = () => {
            alert(`User name ${name}; User age ${age}`);
    }
    return <div className={'user'+id}>
        <h3>User name: {name}</h3>
        <p>User age: {age}</p>
        <p>User status: {status.toString()}</p>
        <button onClick={userInfo}>User info</button>
        <hr/>
    </div>
}