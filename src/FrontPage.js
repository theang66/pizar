import React from 'react';
import styles from './FrontPage.css';

const FrontPage = ({ onStartButton }) => {
  return (
    <div className={styles.FrontPage}>
      <h1 className="f-headline lh-solid">Welcome to Pizar!</h1>
      <h2
      className="tc f2 fw4">Tell us your favorite pizza and we'll tell you what movie to watch!</h2>
      <h2
      className="tc f3 fw4">They might not seem related but they really are.</h2>
      <button
      className="tc f3 fw4 link ph3 pv2 mb2 grow dib black bg-dark-red"
      onClick={onStartButton}>BUILD YOUR PIZZA</button>
    </div>
  )
}

export default FrontPage;
