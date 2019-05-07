import React from "react";
import Grid from "@material-ui/core/Grid";
import { genres } from "./genres";

// Movie card to display a single movie
const MovieCard = ({ movie }) => {
  const genresArray = movie.genre_ids;
  const genresString = genresArray.reduce((genresString, genreID, i) => {
    if (i === 0) {
      return genresString + genres[genreID];
    }
    return genresString + ", " + genres[genreID];
  }, "");

  return (
    <Grid container className="tc pt3 pb3" alignItems="center" justify="center">
      <Grid item className="tc" xs={12} sm={5}>
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        />
      </Grid>
      <Grid item className="tl pl2" xs={12} sm={7}>
        <h2 className="f2">{movie.title}</h2>
        <p className="f4 light-silver">
          {new Date(movie.release_date).getFullYear()} | {movie.vote_average}/10
          | {genresString}
        </p>
        <p className="f4">{movie.overview}</p>
      </Grid>
    </Grid>
  );
};

export default MovieCard;
