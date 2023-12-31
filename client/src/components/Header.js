import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Nav';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <nav className='navbar bg-neutral flex flex-wrap'>
          <div className='navbar-start'>
            <img
              src={logo}
              alt='logo'
              className='logo'
              style={{ width: '150px', height: 'auto' }}
            />
            <button className='btn btn-active bg-base-300 text-xl p2'>
              <Link to='/'>Travel Wanderlust </Link>
            </button>
          </div>
          <Nav />
        </nav>
      </div>
    </header>
  );
};

export default Header;
