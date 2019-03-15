import React from 'react';
import MovieCard from './MovieCard';
import { shuffle } from "lodash";

const MovieList = ({ movies }) => {

  const shuffledMovies = shuffle(movies);

  return (
    <div>
    {shuffledMovies.map((movie,i) => {
      return (
      <MovieCard
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

export default MovieList;
