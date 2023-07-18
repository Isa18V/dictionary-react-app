import React from "react";
import "../css/Synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <div className="SynonymsContainer">
        <ul>
          <li>
            <strong>Synonyms: </strong>
            {props.synonyms}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Antonyms: </strong>
            {props.antonyms}
          </li>
        </ul>
      </div>
    </div>
  );
}
