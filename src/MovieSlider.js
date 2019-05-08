import React, { Component } from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

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
