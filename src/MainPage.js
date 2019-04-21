import React, { Component } from 'react';
import MovieList from './MovieList';
import OptionList from './OptionList';
import { bread, sauce, topping } from './matchings';
import { shuffle } from "lodash";
import Grid from '@material-ui/core/Grid';

const API_KEY = "a86fd5baa6696154f7d8e19d4c5d2689";

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = this.randomStartState();
  }

  // Generates a state and random options every time the quiz resets
  randomStartState() {
    return {
      items: [], // To store the returned list of movies
      isLoaded: false,
      step: 0,
      movieIndex: 0,
      bread: shuffle(bread), // Shuffle the options
      sauce: shuffle(sauce),
      topping: shuffle(topping),
      query: ' ',
      queryStep: ' ',
    };
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
          console.log(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&${this.state.query}`);
          this.setState({
             isLoaded: true,
             items: shuffle(json.results).slice(0, 4), // Shuffle the movie results, get the first 4
          })
        }
      );
    }
  }

  // Continues to next movie when clicked
  onNextMovie = () => {
    if(this.state.movieIndex === (this.state.items.length-1)) {
      // Does not do anything if it is the last movie
    } else {
    this.setState({ movieIndex: this.state.movieIndex + 1 });
    }
  }

  onPrevMovie = () => {
    if(this.state.movieIndex === 0) {
      // Does not do anything if it is the first movie
    } else {
    this.setState({ movieIndex: this.state.movieIndex - 1 });
    }
  }

  // Retrieves the option the user chose to add to query
  handleClick = (attributes, text) => (e) => {
    this.setState({ queryStep: attributes });
  }

  // Restarts the quiz
  onRestart = () => {
    this.setState(this.randomStartState());
  }

  render() {
    const { isLoaded, items, step, movieIndex, bread, sauce, topping } = this.state;

    // One question/step for each topping
    const pizzaSteps = [
      { ingredientName: "BREAD",
        ingredientOptions: bread, },
      { ingredientName: "SAUCE",
        ingredientOptions: sauce, },
      { ingredientName: "TOPPING",
        ingredientOptions: topping, }
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
          <button
          className="f3 br-pill fw6 grow link ph3 pv2 mb2 dib white bg-dark-red"
          onClick={this.onRestart}>Restart</button>
        </div>
      )
    } else { // Results page, show movies one by one
      return (
        <div className="tc">
          <h1>We found you these movies!</h1>
          <MovieList movies={items} movieIndex={movieIndex}/>
          <Grid container spacing={0} style={{padding: 0}}
          alignItems="center"
          justify="center">
              <Grid item xs={6} sm={6} lg={6} xl={6}>
                <button
                className="tc f3 br-pill fw6 grow link ph3 pv2 mb2 dib white bg-dark-red"
                onClick={this.onPrevMovie}>Previous result</button>
              </Grid>
              <Grid item xs={6} sm={6} lg={6} xl={6}>
                <button
                className="tc f3 br-pill fw6 grow link ph3 pv2 mb2 dib white bg-dark-red"
                onClick={this.onNextMovie}>Next result</button>
              </Grid>
              <Grid item xs={6} sm={6} lg={6} xl={6}>
                <button
                className="tr f3 br-pill fw6 grow link ph3 pv2 mb2 dib white bg-dark-red"
                onClick={this.onRestart}>Restart</button>
              </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default MainPage;
