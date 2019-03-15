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

  render() {
    const { isLoaded, items } = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div className="tc">
          <OptionList type={bread}/>
          <OptionList type={sauce}/>
          <OptionList type={topping}/>
          <MovieList movies={items}/>
        </div>
      );
    }
  }
}

export default MainPage;
