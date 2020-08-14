import React from 'react';
import './App.css';
import WordCard from './WordCard';

function App() {
 return (
  <div id="main" className="bg">
    <div id="border0" className="border"> </div>
    <div id="header" className="App-header">Word sorting game</div>
    <div id="border" className="border"> </div>
    <div id="instruction" className="App-instruct"> How to play? : spell "computer-engineer" word by clicking character card from this puzzle</div>
    <div id="border2" className="border"> </div>
    <WordCard value="computer-engineer"/>
    <div id="border3" className="border"> </div>
  </div>
 );
}
export default App;
