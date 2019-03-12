import React from 'react';
import Card from './Card';
import { shuffle } from "lodash";

const CardList = ({ movies }) => {

  const shuffledMovies = shuffle(movies);

  return (
    <div>
    {shuffledMovies.map((movie,i) => {
      return (
      <Card
      key={i}
      id={movie.id}
      title={movie.title}
      release_date={movie.release_date}
      poster_path={movie.poster_path} />
      );
    })}
    </div>
  );
}

export default CardList;
