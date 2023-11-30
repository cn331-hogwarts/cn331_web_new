import React, { useState,useRef } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { GoChevronDown } from "react-icons/go";

import "../Predict.css"
import ParticleBg from '../ParticleBg';
import ParticleBg2 from "../ParticleBg2"
import ParticleBg3 from "../ParticleBg3"
//import ParticleBg4 from '../ParticleBg4'

// images
//p_river
import river_p2 from '../../assets/images/p_river/a2.png'
import river_p3 from '../../assets/images/p_river/a3.png'
import river_p4 from '../../assets/images/p_river/a4.png'
import river_p5 from '../../assets/images/p_river/a5.png'

//p_hill
import hill_p1 from '../../assets/images/p_hill/a1.png'
import hill_p2 from '../../assets/images/p_hill/a2.png'
import hill_p3 from '../../assets/images/p_hill/a3.png'


import pond from '../../assets/images/pond.jpg'
import forest from '../../assets/images/bg.png'

//p_town
//import town from '../../assets/images/town.png'
import town_p2 from '../../assets/images/p_town/a2.png'
import town_p3 from '../../assets/images/p_town/a3.png'
import town_p4 from '../../assets/images/p_town/a4.png'
import town_p5 from '../../assets/images/p_town/a5.png'
import town_p6 from '../../assets/images/p_town/a6.png'
import town_p7 from '../../assets/images/p_town/a7.png'
import town_p8 from '../../assets/images/p_town/a8.png'


const Predict = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [showScrollDownText, setShowScrollDownText] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const handleButtonClick = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8000/predict/', {
        email: userInfo.email,
      });
      setResult(response.data);
      setShowScrollDownText(true);
    } catch (error) {
      console.error('Error predicting:', error.message);
    }
  };

  const parallaxStyle = {
    position:'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const ref=useRef();

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
  };

  return (
      <Parallax pages={10} style={parallaxStyle} ref={ref}>
        <ParallaxLayer offset={0} key={1} speed={0.05}factor={1} 
          style={{backgroundImage:`url(${river_p5})`,backgroundPositionY:'70px',backgroundSize:'1600px'}}>
        </ParallaxLayer>
        <ParallaxLayer offset={0.12} key={1} speed={0.2} factor={1} style={{backgroundImage:`url(${river_p4})`,backgroundPositionX:'120px',backgroundSize:'1600px'}}>
        </ParallaxLayer>

        <ParallaxLayer offset={0.4} key={1} speed={0.4} factor={1} style={{backgroundImage:`url(${river_p3})`,backgroundPositionX:'20px',backgroundSize:'1400px'}}>
        </ParallaxLayer>

        <ParallaxLayer offset={0.3} key={1} speed={0.3} factor={1} style={{backgroundImage:`url(${river_p2})`,backgroundPositionX:'-180px',backgroundSize:'1600px',zIndex:1}}
        >
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <h1 className='findaway-title' style={{color:"white",fontSize:100}}>findsomeone</h1>
        </motion.div>

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

          {showScrollDownText && <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <h1 style={{color:"white",fontSize:20,marginTop:130,fontFamily:"Cursive"}}>scroll down 🪽</h1>
          <GoChevronDown style={{ color: 'white' ,fontSize:40}} />
        </motion.div>}
        </ParallaxLayer>

        <ParallaxLayer offset={1} key={2} speed={0} factor={3} style={{backgroundColor:'black',backgroundSize:'cover',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {showScrollDownText && <motion.div variants={titleVariants} initial="hidden" animate="visible">
        <ParticleBg2 id='1'/>
         <h1 style={{color:"white",fontSize:100,fontFamily:"Cursive"}}>keep going, something is happening</h1>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{color:"white",fontSize:20,marginTop:130,fontFamily:"Cursive"}}>scroll down 🪽</h1>
          <GoChevronDown style={{ color: 'white' ,fontSize:40}} />
        </motion.div>}
        </ParallaxLayer>



        <ParallaxLayer
        offset={2.8} key={4} speed={0.1} factor={1} style={{backgroundImage:`url(${hill_p3})`,backgroundSize:'1400px' ,backgroundPositionX:'100px',backgroundPositionY:'260px',zIndex:1}}>
        </ParallaxLayer>
        <ParallaxLayer
        offset={3} key={4} speed={0.5} factor={1} style={{backgroundImage:`url(${hill_p1})`,backgroundPositionX:'10px',backgroundSize:'1600px',backgroundPositionY:'-100px',zIndex:2}}>
         {showScrollDownText ? (
          <div>
            <br></br>
            <h1 style={{ color: "white", fontSize: 100, marginTop: 130, fontFamily: "Cursive" }}>
              nothing here ,but you need to keep searching
            </h1>
          </div>
          ) : (
          <p style={{ color: 'white', fontSize: 100, fontFamily: "Cursive"}}>
              nothing here
          </p>
          )}
        </ParallaxLayer>
        <ParallaxLayer
        offset={3} key={4} speed={0.3} factor={1} style={{backgroundImage:`url(${hill_p2})`,backgroundSize:'700px' ,backgroundPositionX:'500px',backgroundPositionY:'230px',zIndex:1}}>
        </ParallaxLayer>
        
        <ParallaxLayer offset={4} key={2} speed={0} factor={1} style={{backgroundColor:'black',backgroundSize:'cover',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {showScrollDownText && <motion.div variants={titleVariants} initial="hidden" animate="visible">
         <h1 style={{color:"white",fontSize:100,fontFamily:"Cursive"}}>. . . finally</h1>
          <br></br>
          <br></br>
          <br></br>
          <h1 style={{color:"white",fontSize:20,marginTop:130,fontFamily:"Cursive"}}>scroll down 🪽</h1>
          <GoChevronDown style={{ color: 'white' ,fontSize:40}} />
        </motion.div>}
        </ParallaxLayer>

        <ParallaxLayer offset={5} key={4} speed={0} factor={1} style={{backgroundImage:`url(${pond})`,backgroundSize:'cover',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {showScrollDownText && <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <ParticleBg3/>
          <h1 style={{color:"white",fontSize:50,marginTop:130,fontFamily:"Cursive"}}>{result}</h1>
          <GoChevronDown style={{ color: 'white' ,fontSize:40}} />
        </motion.div>}
        </ParallaxLayer>
        
        <ParallaxLayer offset={5} key={4} speed={0.2} factor={1.3}  style={{backgroundImage:`url(${forest})`,backgroundSize:'cover',position:'fixed'}}>
        </ParallaxLayer>


        <ParallaxLayer offset={7} key={4} speed={0.1} factor={1}  style={{backgroundImage:`url(${town_p6})`,backgroundSize:'1600px'}}>
        </ParallaxLayer>
        <ParallaxLayer offset={7} key={1} speed={0.24} factor={1} style={{backgroundImage:`url(${town_p8})`,backgroundPositionY:'100px',backgroundPositionX:'100px',backgroundSize:'1600px'}}>
        </ParallaxLayer>
        <ParallaxLayer offset={7} key={1} speed={0.4} factor={1} style={{backgroundImage:`url(${town_p7})`,backgroundPositionX:'290px'}}>
        </ParallaxLayer>
        <ParallaxLayer offset={7} key={1} speed={0.1} factor={1} style={{backgroundImage:`url(${town_p3})`,backgroundSize:'1500px',backgroundPositionX:'0px',backgroundPositionY:'330px'}}>
        </ParallaxLayer>

        <ParallaxLayer offset={7} key={1} speed={0.1} factor={1} style={{zIndex:2,backgroundImage:`url(${town_p4})`,backgroundSize:'1500px',backgroundPositionX:'0px',backgroundPositionY:'540px'}}>
        </ParallaxLayer>

        <ParallaxLayer offset={7.2} key={1} speed={0.1} factor={1} style={{zIndex:1, backgroundImage:`url(${town_p5})`,backgroundSize:'1500px',backgroundPositionX:'0px',backgroundPositionY:'540px'}}>
        </ParallaxLayer>
        <ParallaxLayer offset={7} key={1} speed={0.149} factor={1} style={{zIndex:3, backgroundImage:`url(${town_p2})`,backgroundSize:'300px',backgroundPositionX:'800px',backgroundPositionY:'520px'}}> 
        {showScrollDownText ? (
          <>
            <ParticleBg/>
            <h1 style={{color:"white",fontSize:100,fontFamily:"Cursive"}}> congrats!</h1>
            <h2 style={{color:"white",fontSize:70,fontFamily:"Cursive",zIndex:100,marginTop:'-100px'}}> {userInfo.first_name} {userInfo.last_name}</h2>
          </>
        ):(
          <h1 style={{color:"white",fontSize:100,fontFamily:"Cursive",marginTop:'100px'}}> just a normal town</h1>
        )}

        </ParallaxLayer>
      </Parallax>
  );
};

export default Predict;
