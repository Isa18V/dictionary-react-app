import React from "react";

export default function Result(props) {
  if (props.results) {
    return (
      <div className="result">
        <h2>{props.results.word}</h2>
        <ul>
          {props.results.meanings.map(function (meanings, index) {
            return <li key={index}>{meanings.definition}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
