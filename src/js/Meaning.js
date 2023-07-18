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
          {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
            <li>
              <strong>Synonyms: </strong>
              {props.meaning.synonyms.map((synonym, index) => (
                <span key={index}>{synonym}</span>
              ))}
            </li>
          )}
        </ul>
        <ul>
          {props.meaning.antonyms && props.meaning.antonyms.length > 0 && (
            <li>
              <strong>Antonyms: </strong>
              {props.meaning.antonyms.map((antonym, index) => (
                <span key={index}>{antonym}</span>
              ))}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
