import React, { Component } from 'react';
import './App.css';
// import Card from './Card';
import CardList from './CardList';

const API_KEY = "a86fd5baa6696154f7d8e19d4c5d2689";

class App extends Component {

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
      });
  }

  render() {

    const { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>
    }

    else {
      return (
        // <div className="App">
        //   <ul>
        //     {items.map(item => (
        //       <li key={item.id}>
        //         Title: {item.title} | Overview: {item.overview}
        //         <img alt="movie poster" className="tc" src ={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
        //       </li>
        //     ))};
        //   </ul>
        // </div>
        <div className ="tc">

              <CardList movies={items}/>

        </div>
      );
    }
  }
}

export default App;
