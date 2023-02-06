import React from 'react';
import plus from '../assets/img/plus.svg';
import play from '../assets/img/play-button.svg';

export const ItemWest = ({ url, id, name, description, year }) => {
  return (
    <div
      style={{
        zIndex: -2,
        background: `linear-gradient(
        hsla(210, 85%, 5%, 0.952),20%,hsla(210, 85%, 5%, 0.202), 80%,hsla(210, 85%, 5%, 0.952)),
        no-repeat url(${url})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="container">
        <section className="item-west-block">
          <article className="item-west-left">
            <div className="item-west-left__category">
              <button className="item-west-left__category__year">{year}</button>
              <button className="item-west-left__category__type">action</button>
              <button className="item-west-left__category__type">
                adventure
              </button>
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
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
            <img src={url} alt="poster" />
          </article>
        </section>
      </div>
    </div>
  );
};
