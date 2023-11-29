import { LikesCounter } from "./components/LikesCounter.jsx";
import { Plot } from "./components/Plot.jsx";
import { ReviewForm } from "./components/ReviewForm.jsx";
import { Reviews } from "./components/Reviews.jsx";

function App() {
    return (
        <>
            <h1>Gwiezdne wojny</h1>
            <h2>Rok produkcji: 1980</h2>
            <LikesCounter/>
            <Plot/>
            <Reviews />
            <ReviewForm/>
        </>
    );
}

export default App;
