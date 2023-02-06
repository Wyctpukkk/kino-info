import React from 'react';
import logoblack from '../assets/img/logo-black.svg';
import partners from '../assets/img/partners.png';
import facebook from '../assets/img/facebook.png';
import twt from '../assets/img/twt.png';
import inst from '../assets/img/inst.png';
import google from '../assets/img/google.png';

export const Footer = () => {
  return (
    <div className="footer__background">
      <section className="container">
        <div className="footer__columns">
          <article className="footer">
            <div className="footer__logo">
              <img src={logoblack} alt="logo" />
              <p>KALLYAS</p>
            </div>
            <p className="footer__copyrights">
              © Copyright 2019 KALLYAS - Hogash Studio. All rights reserved.
            </p>
            <div className="footer__partners">
              <p>Our Partners</p>
              <ul className="footer__partners__list">
                <li className="footer__partners__items">
                  <img src={partners} alt="logo" />
                </li>
                <li className="footer__partners__items">
                  <img src={partners} alt="logo" />
                </li>
                <li className="footer__partners__items">
                  <img src={partners} alt="logo" />
                </li>
                <li className="footer__partners__items">
                  <img src={partners} alt="logo" />
                </li>
                <li className="footer__partners__items">
                  <img src={partners} alt="logo" />
                </li>
                <li className="footer__partners__items">
                  <img src={partners} alt="logo" />
                </li>
              </ul>
            </div>
            <div className="footer__social">
              <ul className="footer__social__list">
                <li className="footer__social__items">
                  <img src={facebook} alt="logo" />
                  <img src={google} alt="logo" />
                  <img src={twt} alt="logo" />
                  <img src={inst} alt="logo" />
                </li>
              </ul>
            </div>
          </article>
          <article className="footer__category">
            <p className="footer__category__title">Movies & Serials</p>
            <ul className="footer__category__list">
              <li className="footer__category__item">Action</li>
              <li className="footer__category__item">Adventure</li>
              <li className="footer__category__item">Animation</li>
              <li className="footer__category__item">Biography</li>
              <li className="footer__category__item">Comedy</li>
              <li className="footer__category__item">Crime</li>
              <li className="footer__category__item">Documentary</li>
              <li className="footer__category__item">Drama</li>
              <li className="footer__category__item">Family</li>
              <li className="footer__category__item">Fantasy</li>
              <li className="footer__category__item">Film Noir</li>
              <li className="footer__category__item">History</li>
              <li className="footer__category__item">Horror</li>
              <li className="footer__category__item">Music</li>
              <li className="footer__category__item">Musical</li>
              <li className="footer__category__item">Mystery</li>
              <li className="footer__category__item">Romance</li>
              <li className="footer__category__item">Sci-Fi</li>
              <li className="footer__category__item">Short</li>
              <li className="footer__category__item">Sport</li>
              <li className="footer__category__item">Superhero n</li>
              <li className="footer__category__item">Thriller</li>
              <li className="footer__category__item">War</li>
              <li className="footer__category__item">Wester</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
};
