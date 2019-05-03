import React, { Component } from "react";
import "./App.css";
import FrontPage from "./FrontPage";
import MainPage from "./MainPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFrontPage: true
    };
  }

  onStartButton = () => {
    this.setState({ isFrontPage: false });
  };

  render() {
    // Navigates to main page when button is clicked
    const { isFrontPage } = this.state;
    if (!isFrontPage) {
      return (
        <div>
          <MainPage />
        </div>
      );
    } else {
      return (
        <div>
          <FrontPage onStartButton={this.onStartButton} />
        </div>
      );
    }
  }
}

export default App;
