import React from 'react';
import './Pokecard.css'

const BASE_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

function generatePokecard(props) {
    return(
    <div className="Pokecard" key={props.name}>
        <h3 className="Pokecard-title">{props.name}</h3>
        <img className="Pokecard-img" src={`${BASE_IMG_URL}/${props.id}.png`} alt={`A sprite of ${props.name}`}></img>
        <p className="Pokecard-type">Type {props.type}</p>
        <p className="Pokecard-exp">EXP: {props.base_experience}</p>
    </div>
    )
}

export default generatePokecard;