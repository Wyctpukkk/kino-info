import './App.scss';
import avengers from './assets/img/theavenger.jpg';
import plus from './assets/img/plus.svg';
import play from './assets/img/play-button.svg';
import { ItemWest } from './components/ItemWest';
import { ItemEast } from './components/ItemEast';
import background from './assets/img/back1.png';
import { Header } from './components/Header';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <div
        style={{
          zIndex: -2,
          background: `linear-gradient(  
            hsla(210, 85%, 5%, 0.952),20%,hsla(210, 85%, 5%, 0.202), 80%,hsla(210, 85%, 5%, 0.952)),
            url(${background})`,
        }}
      >
        <Header />
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
      <Slider />
      <ItemWest />
      <ItemEast />
    </div>
  );
}

export default App;
