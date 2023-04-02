import "../App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Homepage() {
  const [wantedNames, setWantedNames] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://ws-public.interpol.int/notices/v1/red?nationality=DE",
    ).then((response) => {
      setWantedNames([...response.data._embedded.notices]);
    });
  }, []);

  const wantedDetails = wantedNames.map((person) => {
    const updatedEID = person.entity_id;
    console.log(updatedEID);
    return (
      <div>
        <h3>
          <Link to={`/users/${person.entity_id}`}>
            {person.forename + " " + person.name}
          </Link>
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

export default Homepage;
