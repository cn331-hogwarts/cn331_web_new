import React from 'react';
import '../../App.css';
import '../Home.css';
import Yourname from '../Yourname';
import Cards from '../Cards';
import axios from 'axios';
import Signin from './Signin';


function Home() {
  return (
    <>
      <Yourname/>
      <Cards/>
    </>
  );
}

export default Home;