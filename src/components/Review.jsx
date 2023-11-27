import React from 'react';

export function Review({id, author, text}) {
    return (
        <article>
            <strong>{author}</strong>
            <p>{text}</p>
        </article>
    );
}

