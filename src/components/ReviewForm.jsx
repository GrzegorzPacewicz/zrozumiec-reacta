import { useState } from "react";
import { Review } from "./Review.jsx";

const initialReviews = [
    { author: "Brian", text: "No!", id: 1 },
    { author: "Jessica", text: "Yes!", id: 2 },
]

export function ReviewForm() {

    const [reviews, setReviews] = useState(initialReviews)
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    const reviewsElement = reviews.map((r) => (
        <Review key={r.id} author={r.author} text={r.text} />
    ));

    function handleSubmit(event) {
        event.preventDefault();

        const author = inputValue;
        const text = textareaValue;

        setReviews((prevReviews) => {
            return [
                { author, text, id: prevReviews.length +1 },
                ...prevReviews,
            ]
        });
        setInputValue("");
        setTextareaValue("")
    }

    return (
        <>
            <hr/>
            <ul>{reviewsElement}</ul>
            <h2>Dodaj recenzję</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="author">Autor</label>
                    </div>
                    <input type="text"
                           name="author"
                           id="author"
                           value={inputValue}
                           onChange={(event) => {
                               setInputValue(event.target.value)
                           }}
                    />
                </div>

                <div>
                    <div>
                        <label htmlFor="">Tekst</label>
                    </div>
                    <textarea
                        name="text"
                        id="text"
                        value={textareaValue}
                        onChange={(event) => {
                            setTextareaValue(event.target.value)
                        }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={inputValue === "" || textareaValue === ""}
                >
                    Dodaj
                </button>

            </form>

        </>
    );
}

export default ReviewForm;