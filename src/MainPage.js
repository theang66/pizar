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
      items: [], // To store the returned list of movies
      isLoaded: false,
      step: 0,
      movieIndex: 0,
      bread: shuffle(bread), // Shuffle the options
      sauce: shuffle(sauce),
      topping: shuffle(topping),
      query: ' ',
      queryStep: ' ',
    }
  }

  onNextButton = () => {
    // Updates the state every time the user clicks Next
    this.setState((state) => {
      return {
        query: state.query + state.queryStep,
        queryStep: ' ',
        step: state.step + 1,
      }
    }, () => {
      console.log(this.state.query);
    })

    // If it is the last step, send a request to the API
    if(this.state.step === 2) {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&${this.state.query}`)
        .then(res => res.json())
        .then(json => {
           this.setState({
             isLoaded: true,
             items: shuffle(json.results), // Shuffle the movie results
           })
         }
      );
    }
  }

  // Continues to next movie when clicked
  onNextMovie = () => {
    if(this.state.movieIndex === (this.state.items.length-1)) {
      this.setState({ movieIndex: 0 });
    } else {
    this.setState({ movieIndex: this.state.movieIndex + 1 });
    }
  }

  // Retrieves the option the user chose to add to query
  handleClick = (attributes, text) => (e) => {
    this.setState({ queryStep: attributes });
  }

  render() {
    const { isLoaded, items, step, movieIndex, bread, sauce, topping } = this.state;

    const pizzaSteps = [
      {
        ingredientName: "BREAD",
        ingredientOptions: bread,
      },
      {
        ingredientName: "SAUCE",
        ingredientOptions: sauce,
      },
      {
        ingredientName: "TOPPING",
        ingredientOptions: topping,
      }
    ];

    let nextButtonLabel = "Next";
    let currentStep = pizzaSteps[step];

    // At the last step, say Randomize instead of Next
    if(step === pizzaSteps.length - 1) {
      nextButtonLabel = "Randomize!";
    }

    // At each step, display instruction and options
    if(currentStep) {
      return (
        <div className="tc">
          <h1>SELECT YOUR {currentStep.ingredientName}</h1>
          <OptionList type={currentStep.ingredientOptions} handleClick={this.handleClick}/>
          <button
            className="f3 fw6 br-pill grow link ph3 pv2 mb2 dib white bg-dark-red"
            onClick={this.onNextButton}>{nextButtonLabel}</button>
        </div>
      );
    }

    if(!isLoaded) { // Loading page while waiting for results
      return <h2>Loading...</h2>;
    } else if(items.length === 0) { // Handles when there are no results
      return (
        <div className="tc">
          <h1>We could not find any :(</h1>
        </div>
      )
    } else { // Results page, show movies one by one
      return (
        <div className="tc">
          <h1>We found you these movies!</h1>
          <MovieList movies={items} movieIndex={movieIndex}/>
          <button
          className="f3 br-pill fw6 grow link ph3 pv2 mb2 dib white bg-dark-red"
          onClick={this.onNextMovie}>Next</button>
        </div>
      );
    }
  }
}

export default MainPage;
