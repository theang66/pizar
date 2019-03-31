import React from 'react';
import styles from './FrontPage.css';

const FrontPage = ({ onStartButton }) => {
  return (
    <div className={styles.FrontPage}>
      <h1 class="f-headline lh-solid">Welcome to Pizar!</h1>
      <h2
      className="tc f2 fw4">Tell us your favourite pizzar and we'll tell you what movie to watch today!</h2>
      <h3
      className="tc f5 fw4">They might not seem related but they really are.</h3>
      <button
      className="tc f3 fw4 link ph3 pv2 mb2 dib black bg-dark-red"
      onClick={onStartButton}>BUILD YOUR PIZAR</button>
    </div>
  )
}

export default FrontPage;
