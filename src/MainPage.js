import React, { Component } from "react";
import OptionList from "./OptionList";
import { bread, sauce, topping } from "./matchings";
import { shuffle } from "lodash";
import Grid from "@material-ui/core/Grid";
import Confetti from "react-confetti";
import ContainerDimensions from "react-container-dimensions";
import MovieSlider from "./MovieSlider";

/* This class represents the main page, including the quiz pages and result page. */

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
    // Updates the state every time the user clicks Next in the quiz
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
        // If it is the last step, send a request to the API
        if (this.state.step === 3) {
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

  // Creates a restart button
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

  // Creates a customized button with the same format
  makeButton = (label, style, action) => {
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
      bread,
      sauce,
      topping,
      rationale,
      chosen,
      queryStep
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

    // At the last step, say Get Movies! instead of Next
    if (step === pizzaSteps.length - 1) {
      nextButtonLabel = "Get Movies!";
    }

    // At each step, display instruction and options
    if (currentStep) {
      return (
        <div className="tc">
          <h1 className="gray ma1">Step {step + 1} of 3</h1>
          <h1 className="pa0 ma1">SELECT YOUR {currentStep.ingredientName}</h1>
          <OptionList
            chosen={chosen}
            type={currentStep.ingredientOptions}
            handleClick={this.handleClick}
          />

          {queryStep === ""
            ? this.makeButton(nextButtonLabel, "disabled ma2")
            : this.makeButton(nextButtonLabel, "ma2", this.onNextButton)}
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
      // Results page, shows the rationale at the top and movies one by one with the slider
      return (
        <div className="tc">
          <Grid container alignItems="center" justify="center">
            <ContainerDimensions>
              {({ width, height }) => (
                <Confetti
                  width={width}
                  height={height}
                  opacity={0.8}
                  numberOfPieces={1600}
                  recycle={false}
                  gravity={0.07}
                />
              )}
            </ContainerDimensions>
            <Grid item xs={10}>
              <h2 className="dark-red fw4 f2 pa3">{rationale}</h2>
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={8} style={{ padding: 0 }}>
              <MovieSlider movies={items} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
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
