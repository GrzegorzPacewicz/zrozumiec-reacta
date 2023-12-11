import { Item } from "../Item/Item.jsx";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
    return (
        <>
            <button onClick={() => alert(`Liczba emoji: ${emojis.length}`)}>Pokaż liczbę emocji
            </button>
            <ul>
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji}/>
                ))}
            </ul>
        </>
    );
}

