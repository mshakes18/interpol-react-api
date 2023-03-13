import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [wantedNames, setWantedNames] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://ws-public.interpol.int/notices/v1/red?nationality=DE",
    ).then((response) => {
      console.log(response.data._embedded.notices[0].forename);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
