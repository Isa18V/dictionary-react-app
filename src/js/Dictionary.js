import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "../css/Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }
  function handlePictureResponse(response) {
    console.log(response);
  }

  function search() {
    let apiKey = "ecb1e604034014f9c94ecdtbo8ae777f";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiImgKey = "ecb1e604034014f9c94ecdtbo8ae777f";
    let apiImgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiImgKey}`;
    axios.get(apiImgUrl).then(handlePictureResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a keyword"
            className="dictionaryInput"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
          <input type="submit" value="Search" className="dictionarySubmit" />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
