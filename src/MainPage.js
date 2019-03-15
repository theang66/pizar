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
      doneBread: false,
      doneSauce: false,
      doneTopping: false,
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

  onFirstNextButton = () => {
    this.setState({ doneBread: true });
  }

  onSecondNextButton = () => {
    this.setState({ doneSauce: true });
  }

  onRandomizeButton = () => {
    this.setState({ doneTopping: true });
  }

  render() {
    const { isLoaded, items, doneBread, doneSauce, doneTopping } = this.state;

    if(!doneBread&&!doneSauce&&!doneTopping) {
      return <div className="tc">
        <h1>Select your bread:</h1>
        <OptionList type={bread}/>
        <button
        className="f3 fw6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
        onClick={this.onFirstNextButton}>Next</button>
        </div>
    }

    if(doneBread&&!doneSauce&&!doneTopping) {
      return <div className="tc">
        <h1>Select your sauce:</h1>
        <OptionList type={sauce}/>
        <button
        className="f3 fw6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
        onClick={this.onSecondNextButton}>Next</button>
        </div>
    }

    if(doneBread&&doneSauce&&!doneTopping) {
      return <div className="tc">
      <h1>Select your topping:</h1>
      <OptionList type={topping}/>
      <button
      className="f3 fw6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
      onClick={this.onRandomizeButton}>Randomize!</button>
      </div>
    }

    if(doneBread&&doneSauce&&doneTopping) {
      if(!isLoaded) {
        return <h2>Loading...</h2>
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
}

export default MainPage;
