import './App.scss';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import background from './assets/img/back1.png';
import { ItemMain } from './components/ItemMain';
import { Slider } from './components/Slider';
import { ItemWest } from './components/ItemWest';
import { ItemEast } from './components/ItemEast';
import { Trends } from './components/Trends';
import { Footer } from './components/Footer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      // 'https://api.kinopoisk.dev/movie?field=rating.kp&search=9-10&field=year&search=2010-2022&token=QKFDB6E-9SBMD5Z-GJ1MT7Y-GM4VY0F',
      'https://6395c5a790ac47c680731729.mockapi.io/films',
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      // .then((json) => setItems(json.docs))
      .then((json) => setItems(json))
      .catch((err) => console.log(err));
  }, []);
  console.log(items);

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
        {items.map((obj, index) => {
          return index === 7 ? (
            <ItemMain
              url={obj.poster.url}
              id={obj.id}
              name={obj.name}
              description={obj.description}
              year={obj.year}
            />
          ) : (
            ''
          );
        })}
      </div>
      <Slider />
      {items.map((obj, index) => {
        return index % 2 ? (
          <ItemWest
            url={obj.poster.url}
            id={obj.id}
            name={obj.name}
            description={obj.description}
            year={obj.year}
          />
        ) : (
          <ItemEast
            url={obj.poster.url}
            id={obj.id}
            name={obj.name}
            description={obj.description}
            year={obj.year}
          />
        );
      })}
      <Trends />
      <Footer />
    </div>
  );
}

export default App;
