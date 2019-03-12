import React from 'react';

const FrontPage = ({ onStartButton }) => {
  return (
    <div className="tc">
      <h1>Welcome to Pizar!</h1>
      <h2>Build your favorite pizza and we'll find you a movie!</h2>
      <button
      className="f3 fw6 link dim ph3 pv2 mb2 dib white bg-dark-blue"
      onClick={onStartButton}>Start!</button>
    </div>
  )
}

export default FrontPage;
