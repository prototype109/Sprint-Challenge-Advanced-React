import React from 'react';

function DisplayPlayers({players}){
const {name, country, searches} = players;
    return(
        <div>
            <h1>{name}</h1>
            <p>{country}</p>
            <p>{searches}</p>
        </div>
    )
}

export default DisplayPlayers;