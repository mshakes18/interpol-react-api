import "../App.css";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserPage() {
  const noticeID = useParams("wantedid");
  // const [wantedNames, setWantedNames] = useState([]);
  // useEffect(() => {
  //   Axios.get(
  //     "https://ws-public.interpol.int/notices/v1/red?nationality=DE",
  //   ).then((response) => {
  //     // console.log(response.data._embedded.notices);
  //     setWantedNames([...response.data._embedded.notices]);
  //   });
  // }, []);

  // const wantedDetails = wantedNames.map((person) => {
  //   return (
  //     <div>
  //       <h3>
  //         <a href={`/${person.entity_id}`}>
  //           {person.forename + " " + person.name}
  //         </a>
  //       </h3>
  //       <p>Date of Birth: {person.date_of_birth}</p>
  //       <hr />
  //     </div>
  //   );
  // });

  return (
    <div>
      <h1>User page</h1>
    </div>
  );
}

export default UserPage;
