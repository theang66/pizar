import React, { Component } from 'react';
import OptionCard from './OptionCard';

class OptionList extends Component {

  render() {
    const shuffledOptions = this.props.type.slice(0,4);
    return(
      <div class='row'>
        <div class='column'>
          <div>
            <OptionCard
            key="0"
            name={shuffledOptions[0].name}
            image={shuffledOptions[0].image}
            onClick={this.props.handleClick(shuffledOptions[0].attributes, shuffledOptions[0].text)}
            />
            <OptionCard
            key="1"
            name={shuffledOptions[1].name}
            image={shuffledOptions[1].image}
            onClick={this.props.handleClick(shuffledOptions[1].attributes, shuffledOptions[1].text)}
            />
          </div>
        </div>
        <div class='column'>
          <div>
            <OptionCard
            key="2"
            name={shuffledOptions[2].name}
            image={shuffledOptions[2].image}
            onClick={this.props.handleClick(shuffledOptions[2].attributes, shuffledOptions[2].text)}
            />
            <OptionCard
            key="3"
            name={shuffledOptions[3].name}
            image={shuffledOptions[3].image}
            onClick={this.props.handleClick(shuffledOptions[3].attributes, shuffledOptions[3].text)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default OptionList;
