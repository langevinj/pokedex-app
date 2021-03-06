import React from 'react';
import Pokedex from './Pokedex.js';
import './Pokegame.css'

function generatePokegame(props){
    const half = props.pokemon.length / 2;
    let pokemonArray = props.pokemon;
    let firstHand = []
    let secondHand = []

    //set the first hand randomly
    while(firstHand.length < half){
        let randIdx = Math.floor(Math.random() * pokemonArray.length)
        if(!firstHand.includes(pokemonArray[randIdx])){
            firstHand.push(pokemonArray[randIdx])
        }
    }
    
    //set second hand with remaining pokemon
    pokemonArray.forEach(function (pokemon){
        if (!firstHand.includes(pokemon)) { 
            secondHand.push(pokemon) 
        }
    }); 

    let firstHandTotal = calcExp(firstHand);
    let secondHandTotal = calcExp(secondHand);

    return(
        <div>
            <Pokedex pokemon={firstHand} totalExp={firstHandTotal} isWinner={isWinner(firstHandTotal, secondHandTotal)}/>
            <div className='Pokegame-pokeball'></div>
            <Pokedex pokemon={secondHand} totalExp={secondHandTotal} isWinner={isWinner(secondHandTotal, firstHandTotal)}/>
        </div>
    )
}

function calcExp(hand){
    let total = 0;
    for(let pokemon of hand){
        total += pokemon.base_experience;
    }
    return total
}

function isWinner(currHandTotal, otherHandTotal){
    return currHandTotal > otherHandTotal;
}

generatePokegame.defaultProps = {
    pokemon: [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
}

export default generatePokegame;