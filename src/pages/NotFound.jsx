import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import background from '../assets/img/back1.png';

export const NotFound = () => {
  return (
    <div
      style={{
        zIndex: -2,
        background: `linear-gradient(  
        hsla(210, 85%, 5%, 0.952),20%,hsla(210, 85%, 5%, 0.202), 80%,hsla(210, 85%, 5%, 0.952)),
        url(${background})`,
      }}
    >
      <div className="container">
        <Header />
        <div className="notfound">
          <h2>Page Not Found</h2>
          <p>
            Uh oh, we can't seem to find the page you're looking for. Try going
            back to previous page or push button "Homepage"
          </p>
          <div>
            <Link to="/">
              <button>homepage</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
