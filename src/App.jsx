import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilmWeb } from "./FilmWeb.jsx";
import { Home } from "./components/Home.jsx";
import { Emojis } from "./Emojis.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/filmweb" element={<FilmWeb/>}/>
                    <Route path="/emojis" element={<Emojis/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
