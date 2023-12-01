import { LikesCounter } from "./components/LikesCounter.jsx";
import { Plot } from "./components/Plot.jsx";
import { ReviewForm } from "./components/ReviewForm.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { useState } from "react";

const initialReviews = [
    { author: "Brian", text: "No!", id: 1 },
    { author: "Jessica", text: "Yes!", id: 2 },
]

function App() {

    const [reviews, setReviews] = useState(initialReviews)

    const handleReviewSubmit = (author, text) =>  {
        setReviews((prevReviews) => {
            return [
                { author, text, id: prevReviews.length + 1 },
                ...prevReviews,
            ]
        });
    }

    return (
        <>
            <h1>Gwiezdne wojny</h1>
            <h2>Rok produkcji: 1980</h2>
            <LikesCounter/>
            <Plot/>
            <Reviews reviews={reviews} />
            <ReviewForm onReviewSubmit={handleReviewSubmit}/>
        </>
    );
}

export default App;
