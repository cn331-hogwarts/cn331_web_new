import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../services/authSlice';
import '../Profile.css';

import axios from 'axios';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [editableFields, setEditableFields] = useState({
    first_name: false,
    last_name: false,
    blood_group: false,
    mbti: false,
    id:false
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
    <div className="page-container">
      <div className="header-container">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg"
          alt="Header Image"
          className="header-image"
        />
      </div>
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
          </div>
          <span className="profile-label">
        Blood Group:{' '}
        {editableFields.blood_group ? (
          <select
            value={userInfo.blood_group}
            onChange={(e) => handleInputChange('blood_group', e.target.value)}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
        ) : (
          <>
            {userInfo.blood_group}{' '}
            <button onClick={() => handleButtonClick('blood_group')}>Edit</button>
          </>
        )}
      </span>
      <span className="profile-label">
        MBTI:{' '}
        {editableFields.mbti ? (
          <select
            value={userInfo.mbti}
            onChange={(e) => handleInputChange('mbti', e.target.value)}
          >
            <option value="ISTJ">ISTJ</option>
            <option value="ISFJ">ISFJ</option>
            <option value="INFJ">INFJ</option>
            <option value="INTJ">INTJ</option>

            <option value="ISTP">ISTP</option>
            <option value="ISFJ">ISFJ</option>
            <option value="ISFP">ISFP</option>
            <option value="INFP">INFP</option>


            <option value="INTP">INTP</option>
            <option value="ESTP">ESTP</option>
            <option value="ESFP">ESFP</option>
            <option value="ENFP">ENFP</option>


            <option value="ESTJ">ESTJ</option>
            <option value="ESFJ">ESFJ</option>
            <option value="ENFJ">ENFJ</option>
            <option value="ENTJ">ENTJ</option>
          </select>
        ) : (
          <>
            {userInfo.mbti}{' '}
            <button onClick={() => handleButtonClick('mbti')}>Edit</button>
          </>
        )}
      </span>
          <div className="profile-item">
            <span className="profile-label">Email: </span>
            <span className="profile-value">{userInfo.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
