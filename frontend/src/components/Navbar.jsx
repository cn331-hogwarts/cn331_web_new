import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../AuthContext';

function Navbar() {
  const { currentUser, username, email } = useAuth();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const [h1Color, setH1Color] = useState("#0093af");
  const chageColorAfter=(t) => {
        setTimeout(()=>{
            setH1Color("#a76bcf");
        },t*1000);

    };

  useEffect(()=>{chageColorAfter(9.5);
  }, []);

  useEffect(() => {
    showButton();
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar' style={{background: `linear-gradient(90deg, #000000 10%, ${h1Color} 100%)`}}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            findaway
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                about
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                profile
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/predict'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                find someone
              </Link>
            </li>

            <li>
              <Link
                to='/signin'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' button_link='/signin'>Sign In</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;