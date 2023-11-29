import React, { useEffect, useState } from 'react';
import './Header.css';
import img from './img/logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = scrolled ? 'header-scrolled' : '';

  return (
    <header id="header" className={headerClass}>
      <div className="container">
        <div className="logo float-left">
          <a href="#header" className="scrollto">
            <img style={{ margin: '0px' }} width="110" src={img} alt="" className="img-fluid" />
          </a>
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active"><a href="#intro">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#footer">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
