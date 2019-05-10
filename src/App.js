import React, { Component } from "react";
import "./App.css";
import FrontPage from "./FrontPage";
import MainPage from "./MainPage";

/* App displays the FrontPage first and navigates to MainPage when start button is clicked. */

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
