import React, { useState } from 'react';

export function LikesCounter() {

    const [numberOfLikes, setNumberOfLikes] = useState(50);

    function handleButtonOfLikesClick() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +1)
    }

    function handleButtonLoveIt() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +3);
    }
    return (
        <>
            <h2>Liczba polubień: {numberOfLikes}</h2>
            <button onClick={handleButtonOfLikesClick}>Lubię to!</button>
            <button onClick={handleButtonLoveIt}>Kocham to!</button>

        </>
    );
}