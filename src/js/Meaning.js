import React from "react";
import Synonyms from "./Synonyms";
import "../css/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <div className="meaningContainer">
        <div className="meaningDefinitionExample">
          <h3>{props.meaning.partOfSpeech}</h3>
          <div>
            <p>
              <strong>Definition: </strong> {props.meaning.definition}
            </p>
            <p>
              <strong>Example: </strong> <em>{props.meaning.example}</em>
            </p>
          </div>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </div>
  );
}
