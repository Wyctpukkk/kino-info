import React from 'react';
import { useEffect, useState } from 'react';
import { ItemWest } from '../components/ItemWest';
import { ItemEast } from '../components/ItemEast';
import { Slider } from '../components/Slider';
import background from '../assets/img/back1.png';
import { ItemMain } from '../components/ItemMain';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Trends } from '../components/Trends';

export const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      // kinopoisk dev
      // 'https://api.kinopoisk.dev/movie?field=rating.kp&search=9-10&field=year&search=2010-2022&token=QKFDB6E-9SBMD5Z-GJ1MT7Y-GM4VY0F',

      // mockapi
      'https://6395c5a790ac47c680731729.mockapi.io/films',

      // kinopoisk unofficial with token
      // 'https://kinopoiskapiunofficial.tech/api/v2.2/films/301',
      {
        method: 'GET',
        // headers: {
        //   'X-API-KEY': '013a05cb-f10e-49fa-a508-f618b44f020d',
        //   'Content-Type': 'application/json',
        // },
      }
    )
      .then((res) => res.json())
      // .then((json) => setItems(json.docs))
      // mockapi
      .then((json) => setItems(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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
              key={obj.filmId}
              url={obj.posterUrl}
              id={obj.filmId}
              name={obj.nameRu}
              description={obj.description}
              year={obj.year}
            />
          ) : (
            ''
          );
        })}
      </div>
      <Slider obj={items} />
      {items.map((obj, index) => {
        return index % 2 ? (
          <ItemWest
            key={obj.filmId}
            url={obj.posterUrl}
            id={obj.filmId}
            name={obj.nameRu}
            description={obj.description}
            year={obj.year}
          />
        ) : (
          <ItemEast
            key={obj.filmId}
            url={obj.posterUrl}
            id={obj.filmId}
            name={obj.nameRu}
            description={obj.description}
            year={obj.year}
          />
        );
      })}
      <Trends />
      <Footer />
    </>
  );
};
