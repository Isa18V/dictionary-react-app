import React, { useState } from "react";
import "../css/Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching ${keyword}`);
  }
  function Search(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Text" onChange={Search} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
