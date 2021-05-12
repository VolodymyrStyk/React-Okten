import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Character.css'
import React from "react";

export default function Character({item, url}) {
  return (
    <div className={'wrap-character'}>
        <div>
            {item.name?.first}  {item.name?.last} - {item.age}
        </div>
        <img src={item.images?.main} alt=""/>
        <div>
            <button><Link to={url + '/' + item.id}>Show details</Link></button>
        </div>
    </div>
  );
}
