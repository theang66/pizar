import React, { Component } from 'react';
import OptionCard from './OptionCard';
import Grid from '@material-ui/core/Grid';

// Display options in 2x2 grid
class OptionList extends Component {

  render() {
    const shuffledOptions = this.props.type.slice(0, 4);
    return(
      <Grid container spacing={0} style={{padding: 0}}
      alignItems="center"
      justify="center">
        { shuffledOptions.map(option => (
          <Grid key={option.id} item xs={6} sm={6} lg={6} xl={6}>
            <OptionCard
            key={option.id}
            name={option.name}
            image={option.image}
            onClick={this.props.handleClick(option.attributes, option.text) }
            />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default OptionList;
