import React from 'react';
import avengers from '../assets/img/theavenger.jpg';
import plus from '../assets/img/plus.svg';
import play from '../assets/img/play-button.svg';
import background1 from '../assets/img/background1.png';

export const ItemWest = () => {
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
        <section className="item-west-block">
          <article className="item-west-left">
            <div className="item-west-left__category">
              <button className="item-west-left__category__year">2012</button>
              <button className="item-west-left__category__type">action</button>
              <button className="item-west-left__category__type">
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
            <div className="item-west-left__buttons">
              <button className="item-west-left__buttons__play">
                Play trailer
                <img src={play} alt="play" />
              </button>
              <button className="item-west-left__buttons__add">
                add to list
                <img src={plus} alt="plus" />
              </button>
            </div>
          </article>
          <article className="item-west-right">
            <img src={avengers} style={{ opacity: 0 }} alt="poster" />
          </article>
        </section>
      </div>
    </div>
  );
};
