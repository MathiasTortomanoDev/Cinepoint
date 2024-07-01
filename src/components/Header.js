import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import logo from "../images/logo.png"
import user from "../images/svgs/user.svg"
import moon from "../images/svgs/moon.svg"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-active' : ''}`}>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">
                <img className="header__nav-logo" src={logo} alt="logo" />
            </a>
          </li>
          <li className="header__nav-item"><a href="/" className="header__nav-link">Inicio</a></li>
          <li className="header__nav-item"><a href="/movies" className="header__nav-link">Peliculas</a></li>
          <li className="header__nav-item"><a href="/series" className="header__nav-link">Series</a></li>
          <li className="header__nav-item"><a href="/genders" className="header__nav-link">Generos</a></li>
        </ul>
        <ul className="header__nav-list header__nav__icons-list">
          <li className="header__nav-item header__nav-item-icon">
            <a href="/series" className="header__nav-link header__nav-link">
              <small className="header__nav-nameUser">Hernán Moreno</small>
              <img className="header__nav-icon" src={user} alt="usuario" />
            </a>
          </li>
          <li className="header__nav-item header__nav-item-icon">
            <a href="/series" className="header__nav-link">
              <img className="header__nav-icon" src={moon} alt="modo oscuro" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
