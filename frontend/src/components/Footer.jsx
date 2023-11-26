import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about' style={{ textDecoration: 'underline' }}>about</Link>
          </div>
          <div class='footer-link-items'>
            <h2>FAQ</h2>
            <p style={{color:'white'}}>tutorial?</p>

          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='https://github.com/cn331-hogwarts' style={{ textDecoration: 'underline' }}>github</a>
            <p style={{color:'white'}}>kun.kerdthaisong@gmail.com</p>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>findaway © 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;