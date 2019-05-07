import React, { Component } from "react";
import Slider from 'react-slick';
import MovieCard from "./MovieCard";

export default class MovieSlider extends Component {

  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      VariableWidth: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <MovieCard movie={this.props.movies[0]} />
          </div>
          <div>
            <MovieCard movie={this.props.movies[1]} />
          </div>
          <div>
            <MovieCard movie={this.props.movies[2]} />
          </div>
          <div>
            <MovieCard movie={this.props.movies[3]} />
          </div>
        </Slider>
      </div>
    );
  }
}
