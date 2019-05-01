import React from 'react';

// Option card to display a single option
const OptionCard = ({ onClick, image, name, attributes, text, style }) => {

  return (
    <div style={style} onClick={onClick}
      attributes={attributes} text={text}
      className="container tc f4 hover-bg-dark-red bg-near-white dib br1 pa2 ma1 grow shadow-5">
      <img alt="options" src={require(`./pics/${image}`)} height="250px" width="350px"/>
      <div className="text-block">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default OptionCard;
