import React, { Component } from 'react';
import './header.css';


export default function Header(props){

    return (
    <header className="App-header">
    <ul className="navBar">
    <li className ="NewGame"> <h2>New Game</h2></li>

       <li className ="FAQ"> <h2>Help</h2></li>
        </ul>
    </header>       
    );
};