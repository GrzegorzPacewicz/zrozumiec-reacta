import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilmWeb } from "./FilmWeb.jsx";
import { Home } from "./components/Home.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/filmweb" element={<FilmWeb />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
