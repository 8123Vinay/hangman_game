import React,{useState} from 'react'
import KeyBoard from './KeyBoard'
import randomWords from 'random-words'
import Hangman from './Hangman'
import Word from './Word';

const random=randomWords().toUpperCase()
const playedSet=new Set();
export default function Game({lives,setLives,start}) {
    let wordToGuess=[...random];
    const [playedLetters,setPlayedLetters]=useState(playedSet);
    return (
      <div style={{display: (start && lives>0) ?"block" : "none"}} className="game" >
         <div className="names"> 
         <h1 className="Title"> Hangman Game!</h1>
         <h1 className="lives">  Lives : {lives}</h1>
         </div>
         <Word wordToGuess={wordToGuess} playedLetters={playedLetters}/>
         <KeyBoard playedLetters={playedLetters} setPlayedLetters={setPlayedLetters} random={random} lives={lives} setLives={setLives}/>
         <Hangman index={6-lives}/>
    </div>
    )
}
