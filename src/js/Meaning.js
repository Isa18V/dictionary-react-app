import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong> {props.meaning.definition}
        </p>
        <p>
          <strong>Phonetic: </strong> {props.meaning.phonetic}
        </p>
        <p>
          <strong>Example: </strong> <em>{props.meaning.example}</em>
        </p>
        <ul>
          {props.meaning.synonyms && (
            <li>
              <strong>Synonyms: </strong> {props.meaning.synonyms.join(", ")}
            </li>
          )}
          {props.meaning.antonyms && (
            <li>
              <strong> Antonyms: </strong> {props.meaning.antonyms.join(", ")}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
