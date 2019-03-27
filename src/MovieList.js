import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, movieIndex }) => {

  console.log(movies, movieIndex);
  let movie = movies[movieIndex];

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
