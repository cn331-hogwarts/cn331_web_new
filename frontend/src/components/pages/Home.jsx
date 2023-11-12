import React from 'react';
import '../../App.css';
import '../Home.css';
import Yourname from '../Yourname';
import Cards from '../Cards';
import axios from 'axios';
import Signin from './Signin';

console.log(Signin.currentUser)
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function Home() {
  return (
    <>
      <Yourname/>
      <Cards/>
    </>
  );
}

export default Home;