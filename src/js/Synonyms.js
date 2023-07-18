import React from "react";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <ul>
        <li>
          <strong>Synonyms: </strong>
          {props.synonyms}
        </li>
      </ul>
    </div>
  );
}
