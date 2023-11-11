import React from 'react';
import '../../App.css';
import '../Home.css';
import Yourname from '../Yourname';
import Cards from '../Cards';
import axios from 'axios';
import Signin from './Signin';

console.log(Signin.currentUser)
function Home() {
  return (
    <>
      <Yourname/>
      <Cards/>
    </>
  );
}

export default Home;