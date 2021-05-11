import {useEffect, useState} from "react";
import {getRandomImage} from "../../services/image.service";
import './User.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function User({item,url}) {
    let [imageURL, setImageURL] = useState();
    useEffect(() => {
        getRandomImage().then(value => setImageURL(value.request.responseURL))
    }, []);

    return (
        <div className={'one-users'}>
            <div>{item.username}</div>
            <img src={imageURL} alt=""/>
            <div>
                <Link to={url+'/'+item.id}>
                    <button>User {item.id} details</button>
                </Link>
            </div>
        </div>
    );
}