import {useEffect, useState} from "react";
import {getRandomImage} from "../../services/image.service";
import './User.css'

export default function User({item,chosenUser}) {
    let [imageURL, setImageURL] = useState();
    useEffect(()=>{
        getRandomImage().then(value => setImageURL(value.request.responseURL))
    },[]);

  return (
    <div className={'one-users'} >
        <div>{item.username}</div>
        <img src={imageURL} alt=""/>
        <div>
            <button onClick={()=>chosenUser(item.id)}>details</button>
        </div>
    </div>
  );
}