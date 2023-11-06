import React, { useEffect, useState } from "react";
import { getperson ,getpersonByID} from "../services/Api";
import "../Profile.css"

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

return (
    <div className="profile-container">
        <h1>person list</h1>
            {persons.map((person,index)=>(
            <li key={index}>
                    <p>name:{person.name} blood_group:{person.blood_group} mbti:{person.mbti}</p>
            </li>
            ))}
    </div>
);
}

export default Profile;