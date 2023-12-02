import React, { useState,useRef } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import "../Predict.css"
import Footer from '../Footer';

import river from '../../assets/images/river.jpg';
import town from '../../assets/images/town.png';
import hill from '../../assets/images/hill.jpg';

const Predict = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleButtonClick = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/predict/', {
        email: userInfo.email,
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error predicting:', error.message);
    }
  };

  const parallaxStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  const ref=useRef();

  return (
    <>
      <Parallax pages={3} style={parallaxStyle} ref={ref}>
        <ParallaxLayer offset={0} key={1} speed={0.02}factor={1} onClick={() => {ref.current.scrollTo(1)}} 
          style={{backgroundImage:`url(${river})`,backgroundSize:'cover',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleButtonClick(userInfo)}
            style={{
              color: 'white',
              borderColor: 'black',
            }}
          >
            predict
          </Button>
            <h1>asdasldkpasodkpaosk</h1>
        </ParallaxLayer>

        <ParallaxLayer
        offset={1} key={2} speed={0.09} factor={1} onClick={() => {ref.current.scrollTo(2)}} style={{backgroundImage:`url(${hill})`,backgroundSize:'cover', alignItems: 'center'}}>
          <h1>qweokdlkasdlkamsldkmalskdpoqpwoepoqwe</h1>
        </ParallaxLayer>


        <ParallaxLayer offset={2} key={3} speed={0}  factor={1} onClick={() => {ref.current.scrollTo(0)}} style={{backgroundImage:`url(${town})`,backgroundSize:'cover',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>asdpkpqowepoqwpeoqpwoepoqwe</h1>
          <h2>{result}</h2>
        </ParallaxLayer>
      
      </Parallax>
      <Footer/>
    </>
  );
};

export default Predict;
