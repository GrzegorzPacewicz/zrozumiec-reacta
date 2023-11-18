function App() {

    function handleClick() {
        alert("klik!")
    }

    return (
        <>
            <h1>Gwiezdne wojny</h1>
            <h2>Rok produkcji: 1980</h2>
            <p>Zli atakują dobrych. Potrzebna pomoc</p>
            <button onClick={handleClick}>Spoiler</button>
        </>
    )
}

export default App
