import React from 'react';
import OptionCard from './OptionCard';
import { shuffle } from "lodash";

const OptionList = ({ type }) => {

  const shuffledOptions = shuffle(type);

  return (
    <div>
    <OptionCard
    name={shuffledOptions[0].name}
    image={shuffledOptions[0].image}
    />
    <OptionCard
    name={shuffledOptions[1].name}
    image={shuffledOptions[1].image}
    />
    <OptionCard
    name={shuffledOptions[2].name}
    image={shuffledOptions[2].image}
    />
    <OptionCard
    name={shuffledOptions[3].name}
    image={shuffledOptions[3].image}
    />
    </div>
  );
}

export default OptionList;

// {shuffledMovies.map((movie,i) => {
//   return (
//   <Card
//   key={i}
//   id={movie.id}
//   title={movie.title}
//   release_date={movie.release_date}
//   poster_path={movie.poster_path} />
//   );
// })}
