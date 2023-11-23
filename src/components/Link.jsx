import React from 'react';

export function Link({ text }) {
    console.log({ text });
    const address = "https://zrozumiecreact.pl/"
    return (
        <a href={address} target="_blank" rel="noopener noreferrer">
            {text}
        </a>

    );
}

export default Link;