import React from 'react';

function DisplayPlayers({players}){

    return(
        <div>
            {players.map(player => {
                return(
                    <div key={player.id}>
                        <h1>{player.name}</h1>
                        <p>{player.country}</p>
                        <p>{player.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayPlayers;