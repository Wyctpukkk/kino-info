import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';

export const Header = () => {
  return (
    <section className="container">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <h2>Kallyas</h2>
        </div>
        <ul className="header__navlist">
          <li className="header__item">
            <Link to="/" className="header__link">
              Homepage
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              Serials
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              Movies
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              Favorites
            </Link>
          </li>
          <li className="header__item">
            <Link to="/" className="header__link">
              My List
            </Link>
          </li>
        </ul>
        <div className="input">
          <input className="input__field" placeholder="Search..."></input>
          <img className="input__search" src={search} alt="search" />
        </div>
        <button className="header__login">Login</button>
        <button className="header__sign">Sign Up</button>
      </header>
    </section>
  );
};
