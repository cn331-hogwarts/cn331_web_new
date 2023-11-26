import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 

const Predict = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [resultTime, setResultTime] = useState(false);

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
        setResultTime(true);
      }, 2000);
    }
  };

  return (
    <div className="page-container">
      <div className="header-container"></div>
      <div className="profile-container">
        <div className="profile-header">
          <Typography variant="h4" className="predict-title">
            User Profile
          </Typography>
        </div>
        <div className="profile-details">
          <div className="profile-item">
            <Typography variant="body1" style={{ color: 'black' }}>
              Id: {userInfo.id}
            </Typography>
            <p></p>
            <Typography variant="body1" style={{ color: 'black' }}>
              First Name: {userInfo.first_name}
            </Typography>
            <p></p>
            <Typography variant="body1" style={{ color: 'black' }}>
              Last Name: {userInfo.last_name}
            </Typography>
            <p></p>
            <Typography variant="body1" style={{ color: 'black' }}>
              Email: {userInfo.email}
            </Typography>
            <p></p>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleButtonClick(userInfo)}
              style={{
                color: 'black',
                borderColor: 'black',
              }}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'Predict'
              )}
            </Button>
            <p></p>

            {result !== null && resultTime && (
              <div>
                <Typography variant="body1">Result:</Typography>
                <Typography variant="body1" style={{ color: 'black' }}>
                  {result}
                </Typography>
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
