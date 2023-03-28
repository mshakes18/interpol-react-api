import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [wantedNames, setWantedNames] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://ws-public.interpol.int/notices/v1/red?nationality=DE",
    ).then((response) => {
      // console.log(response.data._embedded.notices);
      setWantedNames([...response.data._embedded.notices]);
    });
  }, []);

  const wantedDetails = wantedNames.map((person) => {
    return (
      <div>
        <h3>
          <a href={`/${person.entity_id}`}>
            {person.forename + " " + person.name}
          </a>
        </h3>
        <p>Date of Birth: {person.date_of_birth}</p>
        <hr />
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Interpol Most Wanted: Red Notice</h1>
      {wantedDetails}
    </div>
  );
}

export default App;
