import React from "react";

export default function Meaning(props) {
  const { partOfSpeech, definition, phonetic, example, synonyms, antonyms } =
    props.meaning;

  return (
    <div className="meaning">
      <h3>{partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong> {definition}
        </p>
        <p>
          <strong>Phonetic: </strong> {phonetic}
        </p>
        <p>
          <strong>Example: </strong> <em>{example}</em>
        </p>
        <ul>
          <li>
            <strong>Synonyms: </strong>
            {synonyms}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Antonyms: </strong>
            {antonyms}
          </li>
        </ul>
      </div>
    </div>
  );
}
