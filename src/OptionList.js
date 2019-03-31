import React, { Component } from 'react';
import OptionCard from './OptionCard';
import { shuffle } from "lodash";

class OptionList extends Component {

  render() {

    const shuffledOptions = shuffle(this.props.type);

    return (
      <div>
      <OptionCard
      name={shuffledOptions[0].name}
      image={shuffledOptions[0].image}
      onClick={this.props.handleClick(shuffledOptions[0].attributes, shuffledOptions[0].text)}
      />
      <OptionCard
      name={shuffledOptions[1].name}
      image={shuffledOptions[1].image}
      text={shuffledOptions[1].text}
      onClick={this.props.handleClick(shuffledOptions[1].attributes, shuffledOptions[1].text)}
      />
      <OptionCard
      name={shuffledOptions[2].name}
      image={shuffledOptions[2].image}
      text={shuffledOptions[2].text}
      onClick={this.props.handleClick(shuffledOptions[2].attributes, shuffledOptions[2].text)}
      />
      <OptionCard
      name={shuffledOptions[3].name}
      image={shuffledOptions[3].image}
      text={shuffledOptions[3].text}
      onClick={this.props.handleClick(shuffledOptions[3].attributes, shuffledOptions[3].text)}
      />
      </div>
    );
  }
}

export default OptionList;
