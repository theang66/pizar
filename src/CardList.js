import React from 'react';
import Card from './Card';

const CardList = ({ movies }) => {

  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

  const shuffledMovies = shuffleArray(movies);

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
