import React, { useState } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
var test;
const prepareStateFromWord = (given_word) => {
   let word = given_word.toUpperCase()
   let chars = _.shuffle(Array.from(word))
   return {
      word,
      chars,
      attempt: 1,
      guess: '',
      completed: false
   }
}
export default function WordCard(props){

   const [state, setState] = useState(prepareStateFromWord(props.value))
   const activationHandler = (c) => {
      console.log(`${c} has been activated.`)

      let guess = state.guess + c
      test = guess
      setState({...state, guess})

      if(guess.length == state.word.length){
         if(guess == state.word){
            console.log('yeah!')
            setState({...state, completed: true})
         }
         else{
            console.log('reset, next attempt')
            setState({...state, guess: '', attempt: state.attempt + 1})
         }
      }
      console.log(guess)
   }     
   
   return (
   <div>
      <div>
         { 
            state.chars.map((c,i) => 
               <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
            )
         }
      </div>
      <div className="active-text">{test}</div>
   </div>
   )
}