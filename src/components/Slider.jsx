import React, { useState } from 'react';
import leftArrow from '../assets/img/left_arrow.svg';
import rightArrow from '../assets/img/right_arrow.svg';

export const Slider = (obj) => {
  const [margin, setMargin] = useState(-720);

  const marginSlider = (type) => {
    if (type === 'left' && margin > -1200) {
      setMargin(margin - 240);
    } else if (type === 'right' && margin < 0) {
      setMargin(margin + 240);
    }
    console.log(margin);
  };

  return (
    <div className="title">
      <h2 className="slider__title">Popular serials</h2>
      <section className="slider">
        <button className="slider__back" onClick={() => marginSlider('left')}>
          <img src={leftArrow} alt="arrow" />
        </button>
        <article className="slider__block">
          <ul className="slider__list" style={{ marginLeft: `${margin}px` }}>
            {obj.obj.map((obj, index) => {
              return (
                <li className="slider__item" key={obj.id}>
                  <img
                    id={obj.id}
                    className="slider__content"
                    src={obj.poster.url}
                    alt="poster"
                  />
                </li>
              );
            })}
          </ul>
        </article>
        <button className="slider__next" onClick={() => marginSlider('right')}>
          <img src={rightArrow} alt="arrow" />
        </button>
      </section>
    </div>
  );
};
