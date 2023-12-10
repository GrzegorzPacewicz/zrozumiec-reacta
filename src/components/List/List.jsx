import { Item } from "../Item/Item.jsx";
import  styles from "./List.module.css"

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
    return (
        <>
            <button className={styles.btn} onClick={() => alert(`Liczba emoji: ${emojis.length}`)}>Pokaż liczbę emocji
            </button>
            <ul className={styles.list}>
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji}/>
                ))}
            </ul>
        </>
    );
}

