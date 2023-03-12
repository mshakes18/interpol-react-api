import "./App.css";
import Axios from "axios";
import React, { useState } from "react";

function App() {
  const [wantedNames, setWantedNames] = useState([]);
  const getWantedNames = () => {
    Axios.get(
      "https://ws-public.interpol.int/notices/v1/red?nationality=DE",
    ).then((response) => {
      setWantedNames(response.data._embedded.notices);
    });
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
