import React from 'react';
import Grid from '@material-ui/core/Grid';

// Movie card to display a single movie
const MovieCard = ({ title, release_date, poster_path, overview, vote_average }) => {
  return (
    <Grid container className="tc pt3 pb3" alignItems="center"
          justify="center">
      <Grid item xs={12} sm={6} lg={4} xl={3}>
        <img alt="poster" src={`https://image.tmdb.org/t/p/w300${poster_path}`}/>
      </Grid>
      <Grid item className="tl" xs={12} sm={12} lg={4} xl={3}>
        <h2 className="f2">{title}</h2>
        <p className="f3">{new Date(release_date).getFullYear()} | {vote_average}/10 </p>
        <p className="f4">{overview}</p>
      </Grid>
    </Grid>
  );
}

export default MovieCard;
