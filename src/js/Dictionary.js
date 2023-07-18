import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "../css/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "ecb1e604034014f9c94ecdtbo8ae777f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a keyword"
          className="dictionaryInput"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" className="dictionarySubmit" />
      </form>
      <Results results={results} />
    </div>
  );
}
