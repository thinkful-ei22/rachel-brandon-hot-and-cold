import React from 'react';
import Header from './header';
import Form from './form';
import Feedback from './feedback';
import GuessHistory from './guesshistory';
import './styles/guessinggame.css';
import GameBody from './gamebody';

export default function Game(props){
  return (
    <main> 
      <Header />
      <section className='game'>
        <GameBody />
      </section>
    </main>
  );
}
