import React from "react";

const address = "https://zrozumiecreact.pl/";

export function Link({ text = address, shoulOpenNewTab }) {
  const target = shoulOpenNewTab ? "_blank" : "";
  const rel = shoulOpenNewTab ? "noopener noreferrer" : "";

  return (
    <a href={address} target={target} rel={rel}>
      {text}
    </a>
  );
}

export default Link;
