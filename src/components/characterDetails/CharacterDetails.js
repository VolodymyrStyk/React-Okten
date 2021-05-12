import './CharacterDetails.css'
import React, {useEffect, useState} from "react";
import {getCharacters} from "../../services/api.service";
export default function CharacterDetails({props}) {
  const {match:{params:{id:itemId}}} = props;
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters().then(value => setCharacters([...value.data]));
  }, []);
  const charactersFilter = characters.find(value => value.id === Number(itemId))
  return (
      <div className={'wrap-character-detail'}>
        <h3>CharactersFilter Details:</h3>
        <h2>Id:{charactersFilter?.id}; Age:{charactersFilter?.age}</h2>
        <p>{charactersFilter?.name.first} {charactersFilter?.name.middle} {charactersFilter?.name.last}</p>
        <img src={charactersFilter?.images.main} alt=""/>
        <p>{charactersFilter?.gender} {charactersFilter?.species} {charactersFilter?.homePlanet}</p>
        <p>{charactersFilter?.occupation}</p>
        <p>{charactersFilter?.sayings[0]}</p>
      </div>
  );
}