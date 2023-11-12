import React, { useEffect, useState } from "react";
import "../Signin.css";
import '../../App.css';
import axios from "axios";
import Button  from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useAuth } from "../../AuthContext";

function Signin() {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;


  const [currentUser, setCurrentUser] = useState(false);
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/user/")
      .then(function(res) {
        setCurrentUser(true);
      })
      .catch(function(error) {
        setCurrentUser(false);
        console.log("err",error.data)
      });
    },[]);
console.log("currentuser",currentUser)
console.log("register",registrationToggle)
function update_form_btn() {
  if (registrationToggle) {
    document.getElementById("form_btn").innerHTML = "Register";
    setRegistrationToggle(false);
  } else {
    document.getElementById("form_btn").innerHTML = "Log in";
    setRegistrationToggle(true);
  }
}
  function submitRegistration(e) {
    e.preventDefault();
    axios.post(
      "http://127.0.0.1:8000/api/register/",
      {
        email: email,
        username: username,
        password: password
      }
    ).then(function(res) {
      axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          email: email,
          password: password
        }
      ).then(function(res) {
        setCurrentUser(true);
      });
    }).catch(function(error){
      console.log("err",error.data)
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    axios.post(
      "http://127.0.0.1:8000/api/login/",
      {
        email: email,
        password: password
      }
    ).then(function(res) {
      setCurrentUser(true);
    }).catch(function(error){
      console.log("err",error.data)
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    axios.post(
      "http://127.0.0.1:8000/api/logout/",
      null,
    ).then(function(res) {
      setCurrentUser(false);
    }).catch(function(error){
      console.log("err",error.data)
    });
  }
  if(currentUser){
    return (
      <div className="logout"> 
        <form onSubmit={e=> submitLogout(e)}>
          <Button type='submit'>logout</Button>
        </form>
      </div>
    )
  }
  return (
     <div className="body-container">
        <div className="Signin-container">
          <h1 className="yo">Sign in or Sign up</h1>
          <Button id='form_btn' onClick={update_form_btn} >Register</Button>
          {
          registrationToggle ? (
            <div className="register">
              <Form onSubmit={e => submitRegistration(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sing up
                </Button>
              </Form>
            </div>        
          ) : (
            <div className="login">
              <Form onSubmit={e => submitLogin(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </Form>
            </div>
          )
        }
        </div>
      </div> 
  )

}

export default Signin;
