
import React from 'react';
import './styles/feedback.css';

export default function Feedback(props){
  return (
    <p>
            Guess #
      <span id="count">{props.guessNumber}42</span>
            !
    </p>
  );
}