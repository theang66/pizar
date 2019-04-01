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
      bread: shuffle(bread),
      sauce: shuffle(sauce),
      topping: shuffle(topping),
      query: ' ',
      queryStep: ' ',
    }
  }

  onNextButton = () => {
    this.setState((state) => {
      return {
        query: state.query + state.queryStep,
        queryStep: ' ',
        step: state.step + 1,
      }
    }, () => {
      console.log(this.state.query);
    })

    if(this.state.step === 2) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&${this.state.query}`)
        .then(res => res.json())
        .then(json => {
           this.setState({
             isLoaded: true,
             items: shuffle(json.results),
           })
         }
      );
    }
  }

  onNextMovie = () => {
    if(this.state.movieIndex === (this.state.items.length-1)) {
      this.setState({ movieIndex: 0 });
    } else {
    this.setState({ movieIndex: this.state.movieIndex + 1 });
    }
  }

  handleClick = (attributes, text) => (e) => {
    this.setState({ queryStep: attributes });
    console.log(attributes, text);
  }

  render() {
    const { isLoaded, items, step, movieIndex, bread, sauce, topping } = this.state;

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
            className="f3 fw6 grow link ph3 pv2 mb2 dib white bg-dark-blue"
            onClick={this.onNextButton}>{nextButtonLabel}</button>
        </div>
      );
    }

    if(!isLoaded) {
      return <h2>Loading...</h2>;
    } else if(items.length === 0) {
      return (
        <div className="tc">
          <h1>We could not find any :(</h1>
        </div>
      )
    } else {
      return (
        <div className="tc">
          <h1>We found you these movies!</h1>
          <MovieList movies={items} movieIndex={movieIndex}/>
          <button
          className="f3 fw6 grow link ph3 pv2 mb2 dib white bg-dark-blue"
          onClick={this.onNextMovie}>Next</button>
        </div>
      );
    }
  }
}

export default MainPage;
