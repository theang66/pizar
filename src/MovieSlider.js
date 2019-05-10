import React, { Component } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Changes the design of the next arrow
function NextButton(props) {
  const { onClick } = props;
  return (
    <button
      className={`tc nextArrow f3 br-pill fw6 grow ph3 pv2 mb2 dib white bg-dark-red`}
      style={{ outline: "none" }}
      onClick={onClick}
    >
      <span>
        <i className="fas fa-arrow-right" />
      </span>
    </button>
  );
}

// Changes the design of the previous arrow
function PrevButton(props) {
  const { onClick } = props;
  return (
    <button
      className={`tc prevArrow f3 br-pill fw6 grow ph3 pv2 mb2 dib white bg-dark-red`}
      style={{ outline: "none" }}
      onClick={onClick}
    >
      <span>
        <i className="fas fa-arrow-left" />
      </span>
    </button>
  );
}

/* This class implements the carousel design to display movies in the result page. */

export default class MovieSlider extends Component {
  render() {
    let settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextButton />,
      prevArrow: <PrevButton />,
      adaptiveHeight: true,
      variableWidth: false
    };
    return (
      <Slider {...settings}>
        {this.props.movies.map(movie => {
          return (
            <div key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </div>
          );
        })}
      </Slider>
    );
  }
}
