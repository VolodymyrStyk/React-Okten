import React, {useEffect, useState} from "react";
import {getCharacters} from "../../services/api.service";
import Character from "../character/Character";
import './Characters.css'

export default function Characters(props) {
    const {match: {url}} = props;
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacters().then(value => setCharacters([...value.data]));
    }, []);
    return (
        <div>
            <h2>Characters Page</h2>
            <div className={'wrap-characters'}>
                {
                    characters.map(value => <Character key={value.id} item={value} url={url}/>)
                }
            </div>
        </div>
    );
}