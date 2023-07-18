import React from "react";
import Meaning from "./Meaning";
import "../css/Results.css";

export default function Results(props) {
  if (props.results) {
    const uniquePartOfSpeech = [];

    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning) => {
          if (!uniquePartOfSpeech.includes(meaning.partOfSpeech)) {
            uniquePartOfSpeech.push(meaning.partOfSpeech);
            return (
              <div key={meaning.partOfSpeech}>
                <Meaning meaning={meaning} />
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    return null;
  }
}
