import React, { Component } from "react";
import MovieCard from "./MovieCard";
import OptionList from "./OptionList";
import { bread, sauce, topping, noChoice } from "./matchings";
import { shuffle } from "lodash";
import Grid from "@material-ui/core/Grid";

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
      query: "",
      queryStep: "",
      rationale: "",
      rationaleStep: "",
      chosen: ""
    };
  }

  onNextButton = () => {
    // Updates the state every time the user clicks Next
    this.setState(
      state => {
        return {
          query: state.query + state.queryStep,
          queryStep: "",
          step: state.step + 1,
          rationale: state.rationale + " " + state.rationaleStep,
          rationaleStep: ""
        };
      },
      () => {
        console.log(this.state.query);

        // If it is the last step, send a request to the API
        if (this.state.step === 3) {
          if (this.state.query.length === 0) {
            this.setState({
              rationale: noChoice
            });
          }
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}${
              this.state.query
            }`
          )
            .then(res => res.json())
            .then(json => {
              this.setState({
                isLoaded: true,
                items: shuffle(json.results).slice(0, 4) // Shuffle the movie results, get the first 4
              });
            });
        }
      }
    );
  };

  // Continues to next movie when clicked
  onNextMovie = () => {
    if (this.state.movieIndex === this.state.items.length - 1) {
      // Does not do anything if it is the last movie
    } else {
      this.setState({ movieIndex: this.state.movieIndex + 1 });
    }
  };

  onPrevMovie = () => {
    if (this.state.movieIndex === 0) {
      // Does not do anything if it is the first movie
    } else {
      this.setState({ movieIndex: this.state.movieIndex - 1 });
    }
  };

  // Retrieves the option the user chose to add to query
  handleClick = (attributes, text, id) => e => {
    this.setState({
      queryStep: attributes,
      rationaleStep: text,
      chosen: id
    });
  };

  // Restarts the quiz
  onRestart = () => {
    this.setState(this.randomStartState());
  };

  restartButton = () => {
    return (
      <button
        className="f3 br-pill fw6 grow ph3 pv2 mb2 dib white bg-dark-red"
        style={{ outline: "none" }}
        onClick={this.onRestart}
      >
        Restart
      </button>
    );
  };

  prevNextButton = (label, style, action) => {
    return (
      <button
        className={`tc f3 br-pill fw6 grow ph3 pv2 mb2 dib white bg-dark-red ${style}`}
        style={{ outline: "none" }}
        onClick={action}
      >
        <span>{label}</span>
      </button>
    );
  };

  render() {
    const {
      isLoaded,
      items,
      step,
      movieIndex,
      bread,
      sauce,
      topping,
      rationale,
      chosen
    } = this.state;

    // One question/step for each topping
    const pizzaSteps = [
      {
        ingredientName: "BREAD",
        ingredientOptions: bread
      },
      {
        ingredientName: "SAUCE",
        ingredientOptions: sauce
      },
      {
        ingredientName: "TOPPING",
        ingredientOptions: topping
      }
    ];

    let nextButtonLabel = "Next";
    let currentStep = pizzaSteps[step];

    // At the last step, say Randomize instead of Next
    if (step === pizzaSteps.length - 1) {
      nextButtonLabel = "Randomize!";
    }

    // At each step, display instruction and options
    if (currentStep) {
      return (
        <div className="tc">
          <h1>SELECT YOUR {currentStep.ingredientName}</h1>
          <OptionList
            chosen={chosen}
            type={currentStep.ingredientOptions}
            handleClick={this.handleClick}
          />
          <div className="navbar fixed-bottom justify-content-end">
            <button
              className="f3 fw6 br-pill grow ph3 pv2 mb2 dib white bg-dark-red"
              style={{ outline: "none" }}
              onClick={this.onNextButton}
            >
              {nextButtonLabel}
            </button>
          </div>
        </div>
      );
    }

    if (!isLoaded) {
      // Loading page while waiting for results
      return <h2>Loading...</h2>;
    } else if (items.length === 0) {
      // Handles when there are no results
      return (
        <div className="tc">
          <h1>
            Oops! Your pizza seems odd. We could not find any movies :( Try
            again?
          </h1>
          {this.restartButton()}
        </div>
      );
    } else {
      // Results page, show movies one by one
      return (
        <div className="tc">
          <Grid
            container
            alignItems="center"
            justify="center"
            className="rationalebg"
          >
            <Grid item xs={8}>
              <h2 className="white fw6 f4 pa3">{rationale}</h2>
            </Grid>
          </Grid>
          <MovieCard movie={items[movieIndex]} />
          <Grid
            container
            spacing={0}
            style={{ padding: 0 }}
            alignItems="center"
            justify="center"
          >
            <Grid item xs={6} sm={6} lg={6} xl={6}>
              {movieIndex === 0
                ? this.prevNextButton(
                    "Previous Result",
                    "disabled",
                    this.onPrevMovie
                  )
                : this.prevNextButton(
                    "Previous Result",
                    "prevButton",
                    this.onPrevMovie
                  )}
            </Grid>
            <Grid item xs={6} sm={6} lg={6} xl={6}>
              {movieIndex === items.length - 1
                ? this.prevNextButton(
                    "Next Result",
                    "disabled",
                    this.onNextMovie
                  )
                : this.prevNextButton(
                    "Next Result",
                    "nextButton",
                    this.onNextMovie
                  )}
            </Grid>
            <Grid item xs={6} sm={6} lg={6} xl={6}>
              {this.restartButton()}
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default MainPage;
