import {useEffect, useState} from "react";
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
            <div className={'wrap-characters'}>
                {
                    charactersFiltred.map(value => <Character key={value.id} item={value}/>)
                }
            </div>
        </div>
    );
}