import React, { useEffect, useState } from 'react';
import '../Profile.css';
import { useAuth } from '../../AuthContext';
import axios from 'axios';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
function Profile() {

  const { currentUser } = useAuth();
  const [user, setUser] = useState({});
  

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user/");
        if (isMounted) {
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        console.log('Response status:', error.response.data);
      }
    };

    if (currentUser) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {currentUser && (
        <>
          <p>Username : {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  );
}

export default Profile;