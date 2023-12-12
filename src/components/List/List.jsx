import { Item } from "../Item/Item.jsx";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
    return (
        <>
            <button
                className=" bg-transparent border border-solid p-3 border-salmon rounded cursor-pointer w-32 text-salmon transition-colors duration-300 m-8 hover:text-white hover:bg-salmon "

                onClick={() => alert(`Liczba emoji: ${emojis.length}`)}>Pokaż liczbę emocji
            </button>
            <ul className="flex flex-col gap-8 p-8">
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji}/>
                ))}
            </ul>
        </>
    );
}

