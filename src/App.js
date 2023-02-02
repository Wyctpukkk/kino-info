import './App.scss';
import logo from './assets/img/logo.svg';
import search from './assets/img/search.svg';
import avengers from './assets/img/theavenger.jpg';
import plus from './assets/img/plus.svg';
import play from './assets/img/play-button.svg';
import slider from './assets/img/slider.jpg';
import leftArrow from './assets/img/left_arrow.svg';
import rightArrow from './assets/img/right_arrow.svg';

function App() {
  return (
    <div className="App">
      <div className="first-background">
        <div className="container">
          <header className="header">
            <div className="header__logo">
              <img src={logo} alt="logo" />
              <h2>Kallyas</h2>
            </div>
            <ul className="header__navlist">
              <li className="header__item">
                <a className="header__text">Homepage</a>
              </li>
              <li className="header__item">
                <a className="header__text">Serials</a>
              </li>
              <li className="header__item">
                <a className="header__text">Movies</a>
              </li>
              <li className="header__item">
                <a className="header__text">Favorites</a>
              </li>
              <li className="header__item">
                <a className="header__text">My List</a>
              </li>
            </ul>
            <div className="input">
              <input className="input__field" placeholder="Search..."></input>
              <img className="input__search" src={search} alt="search" />
            </div>
            <button className="header__login">Login</button>
            <button className="header__sign">Sign Up</button>
          </header>
        </div>
        <div className="container">
          <section className="first-block">
            <article className="first-left">
              <div className="first-left__category">
                <button className="first-left__category__year">2012</button>
                <button className="first-left__category__type">action</button>
                <button className="first-left__category__type">
                  adventure
                </button>
              </div>
              <h2>the avengers</h2>
              <p>
                When Thor's evil brother, Loki (Tom Hiddleston), gains access to
                the unlimited power of the energy cube called the Tesseract,
                Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D.,
                initiates a superhero recruitment effort to defeat the
                unprecedented threat to Earth.
              </p>
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
              <img src={avengers} alt="poster" />
            </article>
          </section>
        </div>
      </div>
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
    </div>
  );
}

export default App;
