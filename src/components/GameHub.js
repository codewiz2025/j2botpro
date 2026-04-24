import React from 'react';

const GameHub = () => {
    return (
        <div>
            <h1>Game Hub</h1>
            <div>
                <h2>Chess</h2>
                <iframe
                    title="Chess"
                    src="https://www.chess.com/games?tab=analysis"
                    width="600"
                    height="400"
                    frameBorder="0"
                ></iframe>
            </div>
            <div>
                <h2>Subway Surfers</h2>
                <iframe
                    title="Subway Surfers"
                    src="https://www.generadorjuegos.com/games/subway-surfers"
                    width="600"
                    height="400"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default GameHub;
