import React, {useEffect, useState} from "react";
import {getCharacters} from "../../services/api.service";
import Character from "../character/Character";
import './Characters.css'

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacters().then(value => setCharacters([...value.data]));
    }, []);
    const charactersFiltred = characters.filter(value => value.id < 10)
    return (

        <div>
            <h2>Characters Page</h2>
            <div className={'wrap-characters'}>
                {
                    characters.map(value => <Character key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}