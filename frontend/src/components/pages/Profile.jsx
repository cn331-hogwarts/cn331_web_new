import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../services/authSlice';
import { Typography, Button, Select, MenuItem } from '@mui/material';
import '../Profile.css';
import axios from 'axios';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [editableFields, setEditableFields] = useState({
    first_name: false,
    last_name: false,
    blood_group: false,
    mbti: false,
    id: false,
  });

  const dispatch = useDispatch();

  const handleButtonClick = (field) => {
    setEditableFields((prevEditableFields) => ({
      ...prevEditableFields,
      [field]: !prevEditableFields[field],
    }));
  };

  const handleInputChange = (field, value) => {
    setEditableFields((prevEditableFields) => ({
      ...prevEditableFields,
      [field]: false,
    }));

    updateProfile(field, value);
  };

  const updateProfile = async (field, value) => {
    const updatedUser = { ...userInfo, [field]: value };
    const response = await axios.put(`http://localhost:8000/updateUserInfo/user/${userInfo.id}/`, updatedUser);
    dispatch(updateUserInfo(updatedUser));
  };

  return (
    <div className="page-container" >
      <div className="profile-container">
        <div className="profile-header">
          <Typography  variant="h4" className="profile-title">
            User Profile
          </Typography>
        </div>
        <div className="profile-details">
          <div className="profile-item">
            <Typography variant="body1" className="profile-label">
              Id: {userInfo.id}
            </Typography>
            <p></p>
            <Typography variant="body1" className="profile-label">
              First Name: {userInfo.first_name}
            </Typography>
            <p></p>
            <Typography variant="body1" className="profile-label">
              Last Name: {userInfo.last_name}
            </Typography>
          </div>
          <Typography variant="body1" className="profile-label">
            Blood Group:{' '}
            {editableFields.blood_group ? (
              <Select
                value={userInfo.blood_group}
                onChange={(e) => handleInputChange('blood_group', e.target.value)}
              >
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="AB">AB</MenuItem>
                <MenuItem value="O">O</MenuItem>
              </Select>
            ) : (
              <>
                {userInfo.blood_group}{' '}
                <Button
                  variant="outlined"
                  size="small"
                  style={{ fontSize: 'small', padding: '5px', borderColor: 'black', color: 'black' }}
                  onClick={() => handleButtonClick('blood_group')}
                >
                  Edit
                </Button>
              </>
            )}
          </Typography>
          <Typography variant="body1" className="profile-label">
            MBTI:{' '}
            {editableFields.mbti ? (
              <Select
                value={userInfo.mbti}
                onChange={(e) => handleInputChange('mbti', e.target.value)}
              >
                <MenuItem value="ISTJ">ISTJ</MenuItem>
                <MenuItem value="ISFJ">ISFJ</MenuItem>
                <MenuItem value="INFJ">INFJ</MenuItem>
                <MenuItem value="INTJ">INTJ</MenuItem>
                
                <MenuItem value="ISTP">ISTP</MenuItem>
                <MenuItem value="ISFP">ISFP</MenuItem>
                <MenuItem value="INFP">INFP</MenuItem>
                <MenuItem value="INTP">INTP</MenuItem>
              
                <MenuItem value="ESTP">ESTP</MenuItem>
                <MenuItem value="ESFP">ESFP</MenuItem>
                <MenuItem value="ENFP">ENFP</MenuItem>
                <MenuItem value="ENTP">ENTP</MenuItem>
              
                <MenuItem value="ESTJ">ESTJ</MenuItem>
                <MenuItem value="ESFJ">ESFJ</MenuItem>
                <MenuItem value="ENFJ">ENFJ</MenuItem>
                <MenuItem value="ENTJ">ENTJ</MenuItem>
              
              </Select>
            ) : (
              <>
                {userInfo.mbti}{' '}
                <Button
                  variant="outlined"
                  size="small"
                  style={{ fontSize: 'small', padding: '5px', borderColor: 'black', color: 'black' }}
                  onClick={() => handleButtonClick('mbti')}
                >
                  Edit
                </Button>
              </>
            )}
          </Typography>
          <div className="profile-item">
            <Typography variant="body1" className="profile-label">
              Email: {userInfo.email}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;