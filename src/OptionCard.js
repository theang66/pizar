import React from 'react';

const OptionCard = ({ onClick, image, name, attributes, text }) => {

  return (
    <div onClick={onClick}
    attributes={attributes} text={text}
    className="tc f3 bg-light-blue dib br1 pa1 ma1 grow bw2 shadow-5">
      <img alt="options" src={require(`./pics/${image}`)} height="200px" width="200px"/>
      <p>{name}</p>
    </div>
  );
}

export default OptionCard;
