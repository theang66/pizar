import React, { Component } from "react";
import OptionCard from "./OptionCard";
import Grid from "@material-ui/core/Grid";

// Display options in 2x2 grid
class OptionList extends Component {
  optionCard = i => {
    const shuffledOptions = this.props.type.slice(0, 4);
    return (
      <OptionCard
        key={shuffledOptions[i].id}
        name={shuffledOptions[i].name}
        image={shuffledOptions[i].image}
        onClick={this.props.handleClick(
          shuffledOptions[i].attributes,
          shuffledOptions[i].text,
          shuffledOptions[i].id
        )}
        style={
          shuffledOptions[i].id === this.props.chosen
            ? { background: "red" }
            : null
        }
      />
    );
  };

  render() {
    return (
      <div>
        <Grid
          container
          spacing={0}
          style={{ padding: 0 }}
          alignItems="center"
          justify="center"
        >
          {this.optionCard(0)}
          {this.optionCard(1)}
        </Grid>
        <Grid
          container
          spacing={0}
          style={{ padding: 0 }}
          alignItems="center"
          justify="center"
        >
          {this.optionCard(2)}
          {this.optionCard(3)}
        </Grid>
      </div>
    );
  }
}

export default OptionList;
