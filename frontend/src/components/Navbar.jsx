import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../components/services/authSlice'
import { toast } from 'react-toastify';
import { BsFillArrowThroughHeartFill } from "react-icons/bs";


const Navbar=()=> {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
    toast.success("logout success")
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const [h1Color, setH1Color] = useState('#0093af');
  const changeColorAfter = (t) => {
    setTimeout(() => {
      setH1Color('#a76bcf');
    }, t * 1000);
  };

  useEffect(() => {
    changeColorAfter(9.5);
  }, []);

  useEffect(() => {
    showButton();
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar' style={{ background: `linear-gradient(90deg, #000000 10%, ${h1Color} 100%)` }}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FindAway<BsFillArrowThroughHeartFill />
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
              {user ?(
                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                profile
              </Link>
              ):null}
            </li>
            <li className='nav-item'>
              {user ? (<Link to='/predict' className='nav-links' onClick={closeMobileMenu}>
                find someone
              </Link>
              ): null }

            </li>

            <li>
              {user ? (
                <Link to='/' className='nav-links-mobile' onClick={handleLogout}>
                  signout
                </Link>
              ) : null}
            </li>
          </ul>
          {user ?(
            <Button buttonStyle='btn--outline' button_link='/' onClick={handleLogout}>Sign Out</Button>
          ): 
            button && <Button buttonStyle='btn--outline' button_link='/signin' >Sign In</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;