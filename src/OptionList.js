import React, { Component } from "react";
import OptionCard from "./OptionCard";

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
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-sm-8">
              <div class="row">
                <div class="col-lg-6 col-md-12">{this.optionCard(0)}</div>
                <div class="col-lg-6 col-md-12">{this.optionCard(1)}</div>
                <div class="col-lg-6 col-md-12">{this.optionCard(2)}</div>
                <div class="col-lg-6 col-md-12">{this.optionCard(3)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionList;
