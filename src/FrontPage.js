import React from 'react';

const FrontPage = ({ onStartButton }) => {
  return (
    <div>
      <h1 className="f-headline lh-solid">Welcome to Pizar!</h1>
      <h2
      className="tc f2 fw4">Tell us your favorite pizza and we'll tell you what movie to watch!</h2>
      <h2
      className="tc f3 fw4">They might not seem related but they really are.</h2>
      <img className="tc grow"
      alt="options" src={require(`./pics/roundpizza.png`)}
      width="300px"
      onClick={onStartButton}/>
    </div>
  )
}

export default FrontPage;
