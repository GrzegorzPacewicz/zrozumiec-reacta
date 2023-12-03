import React from 'react';
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <p><Link to="filmweb">Filmweb</Link></p>
            <p><Link to="emojis">Emojis</Link></p>
        </>
    );
}
