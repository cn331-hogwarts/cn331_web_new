import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../services/authSlice';
import { Typography, Button, Select, MenuItem } from '@mui/material';
import '../Profile.css';
import axios from 'axios';
import Modal_consent from '../Modal_consent';
import ParticleBg from '../ParticleBg';
import Footer from '../Footer';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [editableFields, setEditableFields] = useState({
    first_name: false,
    last_name: false,
    blood_group: false,
    mbti: false,
    zodiac:false,
    hobbies:false,
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

  const [openModal, setOpenModal] = useState(true);


  return (
    <>
    <div className='page-container'>
       <div>
      <Modal_consent open={openModal} onClose={() => setOpenModal(false)} />
      </div>
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
            <Typography variant="body1" className="profile-label">
              Email: {userInfo.email}
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
          <Typography variant="body1" className="profile-label">
            Zodiac:{' '}
            {editableFields.zodiac ? (
              <Select
                value={userInfo.zodiac}
                onChange={(e) => handleInputChange('zodiac', e.target.value)}
              >
                <MenuItem value="Aries">Aries</MenuItem>
                <MenuItem value="Taurus">Taurus</MenuItem>
                <MenuItem value="Gemini">Gemini</MenuItem>
                <MenuItem value="Cancer">Cancer</MenuItem>
                
                <MenuItem value="Leo">Leo</MenuItem>
                <MenuItem value="Virgo">Virgo</MenuItem>
                <MenuItem value="Libra">Libra</MenuItem>
                <MenuItem value="Scorpio">Scorpio</MenuItem>
              
                <MenuItem value="Sagittarius">Sagittarius</MenuItem>
                <MenuItem value="Capricorn">Capricorn</MenuItem>

                <MenuItem value="Aquarius">Aquarius</MenuItem>

                <MenuItem value="Pisces">Pisces</MenuItem>
              
              </Select>
            ) : (
              <>
                {userInfo.zodiac}{' '}
                <Button
                  variant="outlined"
                  size="small"
                  style={{ fontSize: 'small', padding: '5px', borderColor: 'black', color: 'black' }}
                  onClick={() => handleButtonClick('zodiac')}
                >
                  Edit
                </Button>
              </>
            )}
          </Typography>
          <Typography variant="body1" className="profile-label">
            Hobby:{' '}
            {editableFields.hobbies ? (
              <Select
                value={userInfo.hobbies}
                onChange={(e) => handleInputChange('hobbies', e.target.value)}
              >
                <MenuItem value="Reading">Reading</MenuItem>
                <MenuItem value="Painting">Painting</MenuItem>
                <MenuItem value="Cooking">Cooking</MenuItem>
                <MenuItem value="Hiking">Hiking</MenuItem>
                <MenuItem value="Gardening">Gardening</MenuItem>
                <MenuItem value="Photography">Photography</MenuItem>
                <MenuItem value="Playing Musical Instruments">Playing Musical Instruments</MenuItem>
                <MenuItem value="Dancing">Dancing</MenuItem>
                <MenuItem value="Traveling">Traveling</MenuItem>
                <MenuItem value="Fishing">Fishing</MenuItem>
                <MenuItem value="Knitting or Crocheting">Knitting or Crocheting</MenuItem>
                <MenuItem value="Playing Sports">Playing Sports</MenuItem>
                <MenuItem value="Bird Watching">Bird Watching</MenuItem>
                <MenuItem value="Yoga">Yoga</MenuItem>
                <MenuItem value="Playing Board Games">Playing Board Games</MenuItem>
                <MenuItem value="Writing">Writing</MenuItem>
                <MenuItem value="Collecting">Collecting</MenuItem>
                <MenuItem value="DIY (Do-It-Yourself) Projects">DIY (Do-It-Yourself) Projects</MenuItem>
                <MenuItem value="Meditation">Meditation</MenuItem>
                <MenuItem value="Camping">Camping</MenuItem>
                            
              </Select>
            ) : (
              <>
                {userInfo.hobbies}{' '}
                <Button
                  variant="outlined"
                  size="small"
                  style={{ fontSize: 'small', padding: '5px', borderColor: 'black', color: 'black' }}
                  onClick={() => handleButtonClick('hobbies')}
                >
                  Edit
                </Button>
              </>
            )}
          </Typography>
          
              
            <ParticleBg/>

            </div>
          </div>
        </div>

        <Footer/>
        </>
  );
};

export default Profile;