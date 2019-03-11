import React from 'react';
import Card from './Card';

const CardList = ({ movies })=>{
  // if(true){ // only developers will see
  //   throw new Error('Nooo!');
  // }

//   randomizedMovies=movies=>{
//     const randomizedMovies = [];
//     movies = movies.shuffle();
//     randomizedMovies.push(movies[0]);
//     randomizedMovies.push(movies[1]);
//     randomizedMovies.push(movies[2]);
//     return randomizedMovies;
// }
//
//   shuffle=()=> {
// var input = this;
//
// for (var i = input.length-1; i >=0; i--) {
//
//     var randomIndex = Math.floor(Math.random()*(i+1));
//     var itemAtIndex = input[randomIndex];
//
//     input[randomIndex] = input[i];
//     input[i] = itemAtIndex;
// }
// return input;
//
// }

  return (

    <div>
    {movies.map((movie,i) => {
      return (
      <Card
      key={i}
      id={movie.id}
      title={movie.title}
      release_date={movie.release_date}
      poster_path={movie.poster_path} />
    );
  })
}
    </div>
  );
}

export default CardList;
