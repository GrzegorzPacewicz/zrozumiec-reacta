import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilmWeb } from "./FilmWeb.jsx";
import { Home } from "./components/Home.jsx";
import { DynamicEmojis } from "./components/DynamicEmojis.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/filmweb" element={<FilmWeb/>}/>
                    <Route path="/emojis" element={<DynamicEmojis/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
