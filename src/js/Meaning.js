import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong> {props.meaning.definition}
        </p>
        <p>
          <strong>Phonetic: </strong> {props.phonetic}
        </p>
        <p>
          <strong>Example: </strong> <em>{props.meaning.example}</em>
        </p>
        <Synonyms synonyms={props.meaning.synonyms} />;
        <ul>
          <li>
            <strong>Antonyms: </strong>
            {props.meaning.antonyms}
          </li>
        </ul>
      </div>
    </div>
  );
}
