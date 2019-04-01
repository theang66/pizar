import React from 'react';

const OptionCard = ({ onClick, image, name, attributes, text }) => {

  return (
    <div onClick={onClick}
    attributes={attributes} text={text}
    className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="options" src={require(`../pics/${image}`)} height="250px" width="250px"/>
      <p>{name}</p>
    </div>
  );
}

export default OptionCard;