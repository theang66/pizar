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
    this.setState({ query: this.state.query + this.state.queryStep });
    this.setState({ queryStep: ' ' });
    this.setState({ step: this.state.step + 1 });

    if(this.state.step === 2) {
      console.log(this.state.query);
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
    console.log('Query: ' + this.state.query);
    console.log('QueryStep: ' + this.state.queryStep);
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

    if(step === pizzaSteps.length - 1) {
      nextButtonLabel = "Randomize!";
    }

    if(currentStep) {
      return (
        <div className="tc">
          <h1>SELECT YOUR {currentStep.ingredientName}</h1>
          <OptionList type={currentStep.ingredientOptions} handleClick={this.handleClick}/>
          <button
            className="f3 fw6 link ph3 pv2 mb2 dib black bg-dark-red"
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
