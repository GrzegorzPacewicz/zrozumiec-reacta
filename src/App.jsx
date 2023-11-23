import { LikesCounter } from "./components/LikesCounter.jsx";
import { Plot } from "./components/Plot.jsx";
import { ReviewForm } from "./components/ReviewForm.jsx";
import Link from "./components/Link.jsx";

function App({ text, shoulOpenNewTab }) {
    return (
        <>
            <h1>Gwiezdne wojny</h1>
            <h2>Rok produkcji: 1980</h2>
            <LikesCounter/>
            <Plot/>
            <ReviewForm/>

            <h2>Nasza strona</h2>
            <main>
                <Link 
                text="Sprawdź stronę kursu!"
                shoulOpenNewTab={true}
                />
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet esse facilis inventore
                    iure libero omnis pariatur recusandae? Atque mollitia, nesciunt. Culpa dolorum enim eum impedit in
                    iusto libero! </p>
                <Link 
                text="https://zrozumiecreact.pl/"
                shoulOpenNewTab={false}
                />

            </main>
        </>
    )
}

export default App
