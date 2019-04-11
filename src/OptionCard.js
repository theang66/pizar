import React from 'react';

// Option card to display a single option
const OptionCard = ({ onClick, image, name, attributes, text }) => {

  return (
    <div onClick={onClick}
      attributes={attributes} text={text}
      className="tc f3 red bg-near-white dib br1 pa1 ma1 grow bw2 shadow-5">
      <img alt="options" src={require(`./pics/${image}`)} height="180px" width="350px"/>
      <p>{name}</p>
    </div>
  );
}

export default OptionCard;
