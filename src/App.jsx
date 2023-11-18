import { useState } from "react";

function App() {

    const [isSpoilerShown, setIsSpoilerShown] = useState(false);
    const [isWarningShown, setIsWarningShown] = useState(true);
    const [numberOfLikes, setNumberOfLikes] = useState(50);

    function handleShowSpoiler() {
        setIsSpoilerShown(true);
        setIsWarningShown(false);
    }

    function handleCloseWarning() {
        setIsWarningShown(false)
    }

    function handleButtonOfLikesClick() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +1)
    }

    function handleButtonLoveIt() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +3);
    }

    return (
        <>
            <h1>Gwiezdne wojny</h1>

            <h2>Rok produkcji: 1980</h2>

            <h2>Liczba polubień: {numberOfLikes}</h2>
            <button onClick={handleButtonOfLikesClick}>Lubię to!</button>
            <button onClick={handleButtonLoveIt}>Kocham to!</button>

            <h2>Fabuła</h2>

            {isWarningShown && (<p>Uwaga! Opis zawiera spoiler! <button onClick={handleCloseWarning}>X</button></p>)}

            <p>Źli atakują dobrych. Potrzebna pomoc.</p>

            {isSpoilerShown ? (<p>Vader jest ojcem Luke.</p>) : (
                <button onClick={handleShowSpoiler}>Uważaj na spoiler</button>
            )}
        </>
    )
}

export default App
