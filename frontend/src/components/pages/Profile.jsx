import React, { useEffect, useState } from "react";
import { getperson ,getpersonByID} from "../services/Api";
import "../Profile.css"
import Signin from "./Signin";

function Profile() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    let mount = true;
    getperson()
      .then((res) => {
        if (mount) {
          setPersons(res);
        }
      });
    return () => {
      mount = false;
    };
  }, []);
if (Signin.currentUser){
  return(
    <div className="profile-container">
    <p>{Signin.username}</p>
    <p>{Signin.email}</p>
    </div>
  );
}

return (
    <div className="profile-container">
        <h1>p list</h1>
    </div>
);
}

export default Profile;