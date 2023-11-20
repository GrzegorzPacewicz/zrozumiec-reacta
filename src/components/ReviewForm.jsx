import { useState } from "react";

export function ReviewForm() {

    const [review, setReview] = useState(null)
    const [inputValue, setInputValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        const author = inputValue;
        const text = textareaValue;

        setReview({author, text});
    }

    return (
        <>
            {review && (
                <article>
                    <strong>{review.author}</strong>
                    <p>{review.text}</p>
                </article>
            )}
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
                        cols="30"
                        rows="10"></textarea>
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