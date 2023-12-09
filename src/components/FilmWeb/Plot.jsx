import React, { useState } from 'react';

export function Plot() {

    const [isSpoilerShown, setIsSpoilerShown] = useState(false);
    const [isWarningShown, setIsWarningShown] = useState(true);

    function handleShowSpoiler() {
        setIsSpoilerShown(true);
        setIsWarningShown(false);
    }

    function handleCloseWarning() {
        setIsWarningShown(false)
    }

    return (
       <>
           <h2>Fabuła</h2>

           {isWarningShown && (<p>Uwaga! Opis zawiera spoiler! <button onClick={handleCloseWarning}>X</button></p>)}

           <p>Źli atakują dobrych. Potrzebna pomoc.</p>

           {isSpoilerShown ? (<p>Vader jest ojcem Luke.</p>) : (
               <button onClick={handleShowSpoiler}>Uważaj na spoiler</button>
           )}
       </>
    );
}
