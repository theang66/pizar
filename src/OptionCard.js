import React from 'react';

const OptionCard = ({ image, name }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="options" src={require(`../pics/${image}`)} height="200px" width="200px"/>
      <p>{name}</p>
    </div>
  );
}

export default OptionCard;
