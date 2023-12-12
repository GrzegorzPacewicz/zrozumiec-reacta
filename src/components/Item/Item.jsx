import { useState } from "react";

export function Item({ emoji }) {
    const [zoomed, setZoomed] = useState(false);

    return (
        <li className="bg-salmon py-8 px-12 rounded-3xl text-center overflow-hidden">
            <span className={`block mb-10 text-3xl transition-transform ${zoomed ? "scale-[2]" : ""}`}>{emoji}</span>
            <button
                className="bg-transparent border border-solid p-3 border-white rounded cursor-pointer w-32 text-white transition-colors duration-300 hover:text-salmon hover:bg-white "
                onClick={() => {
                    setZoomed((wasZoomed) => !wasZoomed);
                }}
            >
                {zoomed ? "Oddal" : "Przybliż"}
            </button>
        </li>
    );
}