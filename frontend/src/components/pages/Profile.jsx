import React, { useEffect, useState } from 'react';
import { getperson, getpersonByID } from '../services/Api';
import '../Profile.css';
import { useAuth } from '../../AuthContext';

function Profile() {
  const { currentUser, username, email } = useAuth();
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
      <h1>Profile</h1>
      {currentUser==true && (
        <>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
        </>
      )}
    </div>
  );
}

export default Profile;
