import React from 'react';

const Card = ({ title, release_date, poster_path }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="movies" src ={`https://image.tmdb.org/t/p/w200${poster_path}`}/>
      <div>
      <h2>{title}</h2>
      <p>{release_date}</p>
      </div>
    </div>
  );
}

export default Card;
