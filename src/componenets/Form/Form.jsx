import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const [selectedRoute, setSelectedRoute] = useState(props.routes[0].route);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("-");

  function handleFormSubmit(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      setResult(xhr.responseText);
    });
    xhr.open("GET", `http://localhost:9000${selectedRoute}/${inputValue}`);
    xhr.send();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <select
        value={selectedRoute}
        onChange={(event) => setSelectedRoute(event.target.value)}
        name="routes"
        id="select"
      >
        {props.routes.map((r) => (
          <option key={r.id} value={r.route}>
            {r.route}
          </option>
        ))}
      </select>
      <br />
      <input
        placeholder="Parameter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      ></input>
      <button type="submit" className="button">
        Get
      </button>
      <p className="results">Result: {result}</p>
    </form>
  );
}
