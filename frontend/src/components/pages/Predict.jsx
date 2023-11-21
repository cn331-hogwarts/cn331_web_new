import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../Profile.css'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'

const Predict = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [result_time,setResult_time]=useState(false);

  const handleButtonClick = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/predict/', {
        email: userInfo.email,
      });
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error predicting:', error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setResult_time(true);
      }, 2000);
    }
  };

  return (
    <div className="page-container">
      <div className="header-container"></div>
      <div className="profile-container">
        <div className="profile-header">
          <h1 className="profile-title">User Profile</h1>
        </div>
        <div className="profile-details">
          <div className="profile-item">
            <span className="profile-label">id: {userInfo.id}</span>
            <p></p>
            <span className="profile-label">First Name: {userInfo.first_name}</span>
            <p></p>
            <span className="profile-label">Last Name: {userInfo.last_name}</span>
            <p></p>
            <span className="profile-value">{userInfo.email}</span>
            <p></p>
            <button onClick={() => handleButtonClick(userInfo)}>
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'Predict'
              )}
            </button>

            {result !== null &&result_time&& (
              <div>
                <p>Result:</p>
                <span>{result}</span>
              </div>
            )}

            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
