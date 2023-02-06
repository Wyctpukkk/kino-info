import React from 'react';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';

export const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <h2>Kallyas</h2>
        </div>
        <ul className="header__navlist">
          <li className="header__item">
            <a className="header__text">Homepage</a>
          </li>
          <li className="header__item">
            <a className="header__text">Serials</a>
          </li>
          <li className="header__item">
            <a className="header__text">Movies</a>
          </li>
          <li className="header__item">
            <a className="header__text">Favorites</a>
          </li>
          <li className="header__item">
            <a className="header__text">My List</a>
          </li>
        </ul>
        <div className="input">
          <input className="input__field" placeholder="Search..."></input>
          <img className="input__search" src={search} alt="search" />
        </div>
        <button className="header__login">Login</button>
        <button className="header__sign">Sign Up</button>
      </header>
    </div>
  );
};
