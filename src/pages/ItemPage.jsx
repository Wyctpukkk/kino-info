import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const ItemPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <section className="item-page-block">
          <article className="item-page-left">
            <img alt="poster" />
          </article>
          <article className="item-page-right">
            <div className="item-page-right__category">
              <button className="item-page-right__category__year">year</button>
              <button className="item-page-right__category__type">
                action
              </button>
              <button className="item-page-right__category__type">
                adventure
              </button>
            </div>
            <h2>name</h2>
            <p>desc</p>
            <div className="item-page-right__buttons">
              <button className="item-page-right__buttons__play">
                Play trailer
                <img alt="play" />
              </button>
              <button className="item-page-right__buttons__add">
                add to list
                <img alt="plus" />
              </button>
            </div>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
};
