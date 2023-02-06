import React from 'react';
import plus from '../assets/img/plus.svg';
import play from '../assets/img/play-button.svg';

export const ItemMain = ({ url, id, name, description, year }) => {
  return (
    <div className="container">
      <section className="first-block">
        <article className="first-left">
          <div className="first-left__category">
            <button className="first-left__category__year">{year}</button>
            <button className="first-left__category__type">action</button>
            <button className="first-left__category__type">adventure</button>
          </div>
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="first-left__buttons">
            <button className="first-left__buttons__play">
              Play trailer
              <img src={play} alt="play" />
            </button>
            <button className="first-left__buttons__add">
              add to list
              <img src={plus} alt="plus" />
            </button>
          </div>
        </article>
        <article className="first-right">
          <img src={url} alt="poster" />
        </article>
      </section>
    </div>
  );
};
