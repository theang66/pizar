import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import FrontPage from './FrontPage';

const API_KEY = "a86fd5baa6696154f7d8e19d4c5d2689";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
        isFrontPage: true,
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

  onStartButton = () => {
    this.setState({ isFrontPage: false });
  }

  render() {

    const { isLoaded, items, isFrontPage } = this.state;

    if(!isFrontPage) {
      if(!isLoaded) {
        return <div>Loading...</div>
      }
      else {
        return (
          <div className ="tc">
                <CardList movies={items}/>
          </div>
        );
      }
    }
    return <div><FrontPage onStartButton={this.onStartButton}/></div>;
  }
}

export default App;
