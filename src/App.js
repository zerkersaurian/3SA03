import React from 'react';
import './App.css';
import WordCard from './WordCard';

function App() {
 return (
  <div>
    <div id="header" className="App-header">Word sorting game</div>
    <div id="instruction" className="App-instruct"> How to play? : spell "HELLO" word by clicking character card from this puzzle</div>
    <WordCard value="hello"/>
  </div>
 );
}
export default App;
