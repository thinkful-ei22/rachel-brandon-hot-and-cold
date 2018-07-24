import React from 'react';
import Form from './form';
import Feedback from './feedback';
import GuessHistory from './guesshistory';
import './styles/gamebody.css';

export default function  GameBody(props) {
  return (
    <div>
      <h2>{props.message}Make your guess!</h2>
      <Form />
      <Feedback />
      <GuessHistory />
    </div>
  );
}