import "../App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const [wantedPersonDetails, setWantedDetails] = useState({});
  const { wantedid } = useParams();
  // console.log(wantedid);
  // const [wantedNames, setWantedNames] = useState([]);
  useEffect(() => {
    Axios.get(`https://ws-public.interpol.int/notices/v1/red/${wantedid}`).then(
      (response) => {
        // console.log(response.data._embedded.notices);
        // console.log(response.data);
        setWantedDetails({ ...response.data });
      },
    );
  }, []);

  console.log(wantedPersonDetails);
  return (
    <div>
      <h1>User page</h1>
      <p>date of birth: {wantedPersonDetails.date_of_birth}</p>
      <p>height: {wantedPersonDetails.height}m</p>
      <p>charge: {wantedPersonDetails.arrest_warrants[0].charge}</p>
    </div>
  );
}

export default UserPage;
