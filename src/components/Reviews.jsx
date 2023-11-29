import React, { useState } from 'react';
import { Review } from "./Review.jsx";

const initialReviews = [
    { author: "Brian", text: "No!", id: 1 },
    { author: "Jessica", text: "Yes!", id: 2 },
]

export function Reviews(props) {
    const [reviews, setReviews] = useState(initialReviews)

    const reviewsElement = reviews.map((r) => (
        <Review key={r.id} author={r.author} text={r.text}/>
    ));
    return (
        <ul>{reviewsElement}</ul>
    );
}