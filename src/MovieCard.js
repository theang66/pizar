import React from "react";
import Grid from "@material-ui/core/Grid";
import { genres } from "./genres"

// Movie card to display a single movie
const MovieCard = ({ movie }) => {
  const array = movie.genre_ids;
  var genresString = genres[movie.genre_ids[0]];
  for (var i=1; i < array.length; i++){
    var key = array[i];
    genresString = genresString + ", " + genres[key];
  }
  return (
    <Grid container className="tc pt3 pb3" alignItems="center" justify="center">
      <Grid item xs={12} sm={6} lg={4} xl={3}>
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
      </Grid>
      <Grid item className="tl" xs={12} sm={12} lg={4} xl={3}>
        <h2 className="f2">{movie.title}</h2>
        <p className="f3">
          {new Date(movie.release_date).getFullYear()} | {movie.vote_average}/10 | {genresString}
        </p>
        <p className="f4">{movie.overview}</p>
      </Grid>
    </Grid>
  );
};

export default MovieCard;
