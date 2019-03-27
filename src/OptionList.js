import React from 'react';
import OptionCard from './OptionCard';
import { shuffle } from "lodash";

const OptionList = ({ type }) => {

  const shuffledOptions = shuffle(type);

  return (
    <div>
    <OptionCard
    name={shuffledOptions[0].name}
    image={shuffledOptions[0].image}
    attributes={shuffledOptions[0].attribute}
    text={shuffledOptions[0].text}
    />
    <OptionCard
    name={shuffledOptions[1].name}
    image={shuffledOptions[1].image}
    attributes={shuffledOptions[1].attribute}
    text={shuffledOptions[1].text}
    />
    <OptionCard
    name={shuffledOptions[2].name}
    image={shuffledOptions[2].image}
    attributes={shuffledOptions[2].attribute}
    text={shuffledOptions[2].text}
    />
    <OptionCard
    name={shuffledOptions[3].name}
    image={shuffledOptions[3].image}
    attributes={shuffledOptions[3].attribute}
    text={shuffledOptions[3].text}
    />
    </div>
  );
}

export default OptionList;
