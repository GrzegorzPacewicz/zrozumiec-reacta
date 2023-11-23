import React from 'react';

export function Link({ text, shoulOpenNewTab }) {
    const address = "https://zrozumiecreact.pl/"
    const target = shoulOpenNewTab ? "_blank" : "";
    return (
        <a href={address} target={target}>
            {text}
        </a>
    );
}

export default Link;