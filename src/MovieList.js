import React from 'react';
import MovieCard from './MovieCard';
import { shuffle } from "lodash";

const MovieList = ({ movies, movieIndex }) => {

  const shuffledMovies = shuffle(movies);
  console.log(movies, movieIndex);
  let movie = shuffledMovies[movieIndex];

  return (
    <div className="tc">
      <MovieCard
      key={movieIndex}
      id={movie.id}
      title={movie.title}
      release_date={movie.release_date}
      poster_path={movie.poster_path}/>
    </div>
  );
}

export default MovieList;
