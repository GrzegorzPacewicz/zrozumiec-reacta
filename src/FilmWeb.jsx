import { LikesCounter } from "./components/FilmWeb/LikesCounter.jsx";
import { Plot } from "./components/FilmWeb/Plot.jsx";
import { ReviewForm } from "./components/FilmWeb/ReviewForm.jsx";
import { Reviews } from "./components/FilmWeb/Reviews.jsx";
import { useState } from "react";

const initialReviews = [
    { author: "Brian", text: "No!", id: 1 },
    { author: "Jessica", text: "Yes!", id: 2 },
]

export function FilmWeb() {

    const [numberOfLikes, setNumberOfLikes] = useState(50);
    const [reviews, setReviews] = useState(initialReviews)
    const [counterShown, setCounterShown] = useState(true)

    function handleButtonOfLikesClick() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +1)
    }

    function handleButtonLoveIt() {
        setNumberOfLikes(previousNumberOfLikes => previousNumberOfLikes +3);
    }

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
            <button onClick={() => {setCounterShown((prevCounterShown) => !prevCounterShown) }}>{counterShown ? "Schowaj counter" : "Pokaż counter" }</button>
            {counterShown &&   <LikesCounter
                numberOfLikes={numberOfLikes}
                onLikeButtonClick={handleButtonOfLikesClick}
                onLoveButtonClick={handleButtonLoveIt}/>}
            <Plot/>
            <Reviews reviews={reviews} />
            <ReviewForm onReviewSubmit={handleReviewSubmit}/>
        </>
    );
}

