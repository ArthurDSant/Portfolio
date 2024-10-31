import './Header.css';

import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useRef, useEffect } from 'react';

const logo = "<ArthurD.Sant />";

function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // OPEN & CLOSE MOBILE NAVBAR
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // CLICKING AWAY CLOSES THE NAVIGATION BAR
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef}>
      <div className='Navbar'>

        <div className='nav-logo'>
          
          <ScrollLink to='Home' activeClass='active' spy={true} href=''>
            <Link to='/' href=''>
              {logo}
            </Link>
          </ScrollLink>
          
        </div>

        <div className='toggleMenu' onClick={toggleMenu}>
          <span className='bar' href=''></span>
          <span className='bar' href=''></span>
          <span className='bar' href=''></span>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ScrollLink
            to='Home'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
            href=''
          >
            HOME
          </ScrollLink>

          <ScrollLink
            to='About'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
            href=''
          >
            ABOUT
          </ScrollLink>

          <ScrollLink
            to='Projects'
            activeClass='active'
            spy={true}
            onClick={toggleMenu}
            href=''
          >
            PROJECTS
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}

export default Index;