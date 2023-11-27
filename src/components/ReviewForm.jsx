import { useState } from "react";

const initialReviews = [
    { author: "Brian", text: "No!", id: 1 },
    { author: "Jessica", text: "Yes!", id: 2 },
]

export function ReviewForm() {

    const [reviews, setReviews] = useState(initialReviews)
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    const reviewsElement = reviews.map((r) => (
        <article>
            <strong>{r.author}</strong>
            <p>{r.text}</p>
        </article>
    ));

    function handleSubmit(event) {
        event.preventDefault();

        const author = inputValue;
        const text = textareaValue;

        setReview({ author, text });
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