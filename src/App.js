import "./App.css";
import Axios from "axios";

function App() {
  const getWantedNames = () => {
    Axios.get(
      "https://ws-public.interpol.int/notices/v1/red?nationality=DE",
    ).then((response) => {
      console.log(response.data._embedded.notices[0].forename);
    });
  };
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>{getWantedNames()}</p>
    </div>
  );
}

export default App;
