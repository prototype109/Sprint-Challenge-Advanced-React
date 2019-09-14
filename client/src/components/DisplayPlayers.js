import React from 'react';

function DisplayPlayers({players}){

    return(
        <div> 
            <div key={players.id}>
                <h1>{players.name}</h1>
                <p>{players.country}</p>
                <p>{players.searches}</p>
            </div>
        </div>
    )
}

export default DisplayPlayers;