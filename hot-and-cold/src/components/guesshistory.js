import React from 'react';
import './styles/guesshistory.css';

export default function GuessHistory(props){
  return (
    <ul id="guesshistory" className="guessBox">
      <li>{props.guess}Sample Guess</li>
    </ul>
  );
}