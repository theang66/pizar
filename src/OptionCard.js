import React from 'react';

// Option card to display a single option
const OptionCard = ({ onClick, image, name, attributes, text, style }) => {

  return (
    <div className="container" style={style} onClick={onClick}
      attributes={attributes} text={text}
      className="tc f4 bg-animate hover-bg-dark-red bg-near-white dib br1 pa1 ma1 grow bw2 shadow-5">
      <img alt="options" src={require(`./pics/${image}`)} height="250px" width="350px"/>
      <div className="text-block">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default OptionCard;
