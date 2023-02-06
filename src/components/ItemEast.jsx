import React from 'react';
import avengers from '../assets/img/theavenger.jpg';
import plus from '../assets/img/plus.svg';
import play from '../assets/img/play-button.svg';
import background1 from '../assets/img/background1.png';

export const ItemEast = () => {
  return (
    <div
      style={{
        zIndex: -2,
        background: `linear-gradient(  
          hsla(210, 85%, 5%, 0.952),20%,hsla(210, 85%, 5%, 0.202), 80%,hsla(210, 85%, 5%, 0.952)),
          url(${background1})`,
      }}
    >
      <div className="container">
        <section className="item-east-block">
          <article className="item-east-left">
            <img src={avengers} alt="poster" />
          </article>
          <article className="item-east-right">
            <div className="item-east-right__category">
              <button className="item-east-right__category__year">2012</button>
              <button className="item-east-right__category__type">
                action
              </button>
              <button className="item-east-right__category__type">
                adventure
              </button>
            </div>
            <h2>the avengers</h2>
            <p>
              When Thor's evil brother, Loki (Tom Hiddleston), gains access to
              the unlimited power of the energy cube called the Tesseract, Nick
              Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a
              superhero recruitment effort to defeat the unprecedented threat to
              Earth.
            </p>
            <div className="item-east-right__buttons">
              <button className="item-east-right__buttons__play">
                Play trailer
                <img src={play} alt="play" />
              </button>
              <button className="item-east-right__buttons__add">
                add to list
                <img src={plus} alt="plus" />
              </button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};
