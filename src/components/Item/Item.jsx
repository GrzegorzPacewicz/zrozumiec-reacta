import { useState } from "react";

export function Item({ emoji }) {
    const [zoomed, setZoomed] = useState(false);

    return (
        <li className="">
            <span>{emoji}</span>
            <button
                onClick={() => {
                    setZoomed((wasZoomed) => !wasZoomed);
                }}
            >
                {zoomed ? "Oddal" : "Przybliż"}
            </button>
        </li>
    );
}