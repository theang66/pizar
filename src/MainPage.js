import React, { Component } from 'react';
import MovieList from './MovieList';
import OptionList from './OptionList';
import { bread, sauce, topping } from './matchings';

const API_KEY = "a86fd5baa6696154f7d8e19d4c5d2689";

class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      step: 0,
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=popularity.desc`)
      .then(res => res.json())
      .then(json => {
         this.setState({
           isLoaded: true,
           items: json.results,
         })
       }
    );
  }

  onNextButton = () => {
    this.setState({ step: this.state.step+1 });
  }

  render() {
    const { isLoaded, items, step } = this.state;

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

    var nextButtonLabel = "Next";
    var currentStep = pizzaSteps[step];

    if(step === pizzaSteps.length - 1) {
      nextButtonLabel = "Randomize!";
    }
    
    if(currentStep) {
      return (
        <div className="tc">
          <h1>Select your {currentStep.ingredientName}:</h1>
          <OptionList type={currentStep.ingredientOptions}/>
          <button
            className="f3 fw6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
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
          <MovieList movies={items}/>
        </div>
      );
    }

  }
}

export default MainPage;
