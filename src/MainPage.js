import React, { Component } from 'react';
import MovieList from './MovieList';
import OptionList from './OptionList';
import { bread, sauce, topping } from './matchings';
import { shuffle } from "lodash";

const API_KEY = "a86fd5baa6696154f7d8e19d4c5d2689";

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      step: 0,
      movieIndex: 0,
      crit1: null,
      crit2: null,
      crit3: null,
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`)
      .then(res => res.json())
      .then(json => {
         this.setState({
           isLoaded: true,
           items: shuffle(json.results),
         })
       }
    );
  }

  onNextButton = () => {
    this.setState({ step: this.state.step + 1 });
  }

  onNextMovie = () => {
    if(this.state.movieIndex === (this.state.items.length-1)) {
      this.setState({ movieIndex: 0 });
    } else {
    this.setState({ movieIndex: this.state.movieIndex + 1 });
    }
  }

  handleClick = (attributes, text) => (e) => {
    console.log(attributes, text);
  }

  render() {
    const { isLoaded, items, step, movieIndex } = this.state;

    const pizzaSteps = [
      {
        ingredientName: "bread",
        ingredientOptions: bread,
      },
      {
        ingredientName: "sauce",
        ingredientOptions: sauce,
      },
      {
        ingredientName: "topping",
        ingredientOptions: topping,
      }
    ];

    let nextButtonLabel = "Next";
    let currentStep = pizzaSteps[step];

    if(step === pizzaSteps.length - 1) {
      nextButtonLabel = "Randomize!";
    }

    if(currentStep) {
      return (
        <div className="tc">
          <h1>Select your {currentStep.ingredientName}:</h1>
          <OptionList type={currentStep.ingredientOptions} handleClick={this.handleClick}/>
          <button
            className="f3 fw6 link ph3 pv2 mb2 dib white bg-dark-blue"
            onClick={this.onNextButton}>{nextButtonLabel}</button>
        </div>
      );
    }

    if(!isLoaded) {
      return <h2>Loading...</h2>;
    }
    else {
      return (
        <div className="tc">
          <h1>Some text goes here!</h1>
          <button
          className="f3 fw6 link ph3 pv2 mb2 dib white bg-dark-blue"
          onClick={this.onNextMovie}>Next</button>
          <MovieList movies={items} movieIndex={movieIndex}/>
        </div>
      );
    }
  }
}

export default MainPage;
