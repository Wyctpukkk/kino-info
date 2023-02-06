import React from 'react';
import plus from '../assets/img/plus.svg';
import play from '../assets/img/play-button.svg';

export const ItemEast = ({ url, id, name, description, year }) => {
  return (
    <div
    // style={{
    //   zIndex: -2,
    //   background: `linear-gradient(
    //     hsla(210, 85%, 5%, 0.952),20%,hsla(210, 85%, 5%, 0.202), 80%,hsla(210, 85%, 5%, 0.952)),
    //     url(${background1})`,
    // }}
    >
      <div className="container">
        <section className="item-east-block">
          <article className="item-east-left">
            <img src={url} alt="poster" />
          </article>
          <article className="item-east-right">
            <div className="item-east-right__category">
              <button className="item-east-right__category__year">
                {year}
              </button>
              <button className="item-east-right__category__type">
                action
              </button>
              <button className="item-east-right__category__type">
                adventure
              </button>
            </div>
            <h2>{name}</h2>
            <p>{description}</p>
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
