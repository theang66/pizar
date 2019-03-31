import React, { Component } from 'react';
import OptionCard from './OptionCard';

class OptionList extends Component {

  render() {
    const shuffledOptions = this.props.type.slice(0,4);
    return(
      <div>
      {shuffledOptions.map((option, i) => {
        return (
        <OptionCard
        key={i}
        name={option.name}
        image={option.image}
        onClick={this.props.handleClick(option.attributes, option.text)}
        />
        );
      })}
      </div>
    )
  }
}

export default OptionList;
