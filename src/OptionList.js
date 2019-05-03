import React, { Component } from 'react';
import OptionCard from './OptionCard';
import styled from 'styled-components';

// import Grid from '@material-ui/core/Grid';
const extraPadding = styled.div`
  margin: 0 100px 0;
`;
// Display options in 2x2 grid
class OptionList extends Component {

  render() {
    const shuffledOptions = this.props.type.slice(0, 4);
    return(
      <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-sm-8">
      	<div class="row">
      		<div class="col-sm-6">
            <OptionCard
            key={shuffledOptions[0].id}
            name={shuffledOptions[0].name}
            image={shuffledOptions[0].image}
            onClick={this.props.handleClick(shuffledOptions[0].attributes, shuffledOptions[0].text, shuffledOptions[0].id)}
            style={shuffledOptions[0].id === this.props.chosen ? { background: 'red' } : null}
            />
      		</div>
      		<div class="col-sm-6">
            <OptionCard
            key={shuffledOptions[1].id}
            name={shuffledOptions[1].name}
            image={shuffledOptions[1].image}
            onClick={this.props.handleClick(shuffledOptions[1].attributes, shuffledOptions[1].text, shuffledOptions[1].id)}
            style={shuffledOptions[1].id === this.props.chosen ? { background: 'red' } : null}
            />
      		</div>

      		<div class="col-sm-6">
            <OptionCard
            key={shuffledOptions[2].id}
            name={shuffledOptions[2].name}
            image={shuffledOptions[2].image}
            onClick={this.props.handleClick(shuffledOptions[2].attributes, shuffledOptions[2].text, shuffledOptions[2].id)}
            style={shuffledOptions[2].id === this.props.chosen ? { background: 'red' } : null}
            />
      		</div>
      		<div class="col-sm-6">
            <OptionCard
            key={shuffledOptions[3].id}
            name={shuffledOptions[3].name}
            image={shuffledOptions[3].image}
            onClick={this.props.handleClick(shuffledOptions[3].attributes, shuffledOptions[3].text, shuffledOptions[3].id)}
            style={shuffledOptions[3].id === this.props.chosen ? { background: 'red' } : null}
            />
      		</div>
          </div>
        </div>
      	</div>
      </div>
      // <div>
      // <Grid container spacing={0} style={{padding: 0}}
      // alignItems="center"
      // justify="center">
      //       <OptionCard
      //       key={shuffledOptions[0].id}
      //       name={shuffledOptions[0].name}
      //       image={shuffledOptions[0].image}
      //       onClick={this.props.handleClick(shuffledOptions[0].attributes, shuffledOptions[0].text, shuffledOptions[0].id)}
      //       style={shuffledOptions[0].id === this.props.chosen ? { background: 'red' } : null}
      //       />
      //       <OptionCard
      //       key={shuffledOptions[1].id}
      //       name={shuffledOptions[1].name}
      //       image={shuffledOptions[1].image}
      //       onClick={this.props.handleClick(shuffledOptions[1].attributes, shuffledOptions[1].text, shuffledOptions[1].id)}
      //       style={shuffledOptions[1].id === this.props.chosen ? { background: 'red' } : null}
      //       />
      // </Grid>
      // <Grid container spacing={0} style={{padding: 0}}
      //       alignItems="center"
      //       justify="center">
      //       <OptionCard
      //       key={shuffledOptions[2].id}
      //       name={shuffledOptions[2].name}
      //       image={shuffledOptions[2].image}
      //       onClick={this.props.handleClick(shuffledOptions[2].attributes, shuffledOptions[2].text, shuffledOptions[2].id)}
      //       style={shuffledOptions[2].id === this.props.chosen ? { background: 'red' } : null}
      //       />
      //       <OptionCard
      //       key={shuffledOptions[3].id}
      //       name={shuffledOptions[3].name}
      //       image={shuffledOptions[3].image}
      //       onClick={this.props.handleClick(shuffledOptions[3].attributes, shuffledOptions[3].text, shuffledOptions[3].id)}
      //       style={shuffledOptions[3].id === this.props.chosen ? { background: 'red' } : null}
      //       />
      // </Grid>
      // </div>
    )
  }
}

export default OptionList;
