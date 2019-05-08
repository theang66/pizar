import React, { Component } from "react";
import Slider from 'react-slick';
import MovieCard from "./MovieCard";

function NextButton(props) {
  const { style, onClick } = props;
  return (
    <button
      className={`tc nextArrow f3 br-pill fw6 grow ph3 pv2 mb2 dib white bg-dark-red ${style}`}
      style={{ outline: "none" }}
      onClick ={onClick}
    >
      <span><i className="fas fa-arrow-right"></i></span>
    </button>
  );
}

function PrevButton(props) {
  const { style, onClick } = props;
  return (
    <button
      className={`tc prevArrow f3 br-pill fw6 grow ph3 pv2 mb2 dib white bg-dark-red ${style}`}
      style={{ outline: "none" }}
      onClick ={onClick}
    >
      <span><i className="fas fa-arrow-left"></i></span>
    </button>
  );
}

export default class MovieSlider extends Component {
  render() {
    var settings = {
      className: "",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextButton />,
      prevArrow: <PrevButton />,
      adaptiveHeight: true,
      VariableWidth: false
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
