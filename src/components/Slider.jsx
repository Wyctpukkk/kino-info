import React from 'react';
import slider from '../assets/img/slider.jpg';
import leftArrow from '../assets/img/left_arrow.svg';
import rightArrow from '../assets/img/right_arrow.svg';

export const Slider = () => {
  return (
    <section className="slider">
      <h2 className="slider__title">Popular serials</h2>
      <article className="slider__block">
        <button className="slider__back">
          <img src={leftArrow} />
        </button>
        <ul className="slider__list">
          <li className="slider__item first">
            <img className="slider__content" src={slider} />
          </li>
          <li className="slider__item">
            <img className="slider__content" src={slider} />
          </li>
          <li className="slider__item">
            <img className="slider__content" src={slider} />
          </li>
          <li className="slider__item">
            <img className="slider__content" src={slider} />
          </li>
          <li className="slider__item">
            <img className="slider__content" src={slider} />
          </li>
          <li className="slider__item">
            <img className="slider__content" src={slider} />
          </li>
          <li className="slider__item last">
            <img className="slider__content" src={slider} />
          </li>
        </ul>
        <button className="slider__next">
          <img src={rightArrow} />
        </button>
      </article>
    </section>
  );
};
