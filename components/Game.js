import React,{useState} from 'react'
import KeyBoard from './KeyBoard'
import randomWords from 'random-words'
import Hangman from './Hangman'
import Word from './Word';
import GameOver from './GameOver'

const random=randomWords().toUpperCase();
let wordToGuess=[...random];
let guessWordSet=new Set(wordToGuess);
const playedSet=new Set();
const maxLives=6;
let isWon=false;
export default function Game({start}) {
    const [playedLetters,setPlayedLetters]=useState(playedSet);
    const [count,setCount]=useState(0);
    let lives=maxLives-(playedLetters.size-count);
    
    if(guessWordSet.size==count){
        isWon=true;
    }
   
    return (
      <div style={{display: (start) ?"block" : "none"}} className="game" >
         <div className ={(lives>0 && !isWon) ? 'names' : "hide"}> 
         <h1 className="Title"> Hangman Game!</h1>
         <h1 className="lives">  Lives : {lives}</h1>
         </div>
         <GameOver lives={lives}/>
         <h1 className={isWon ?"won" : "hide"}>Congratulations You Won the Game</h1>
         <Word wordToGuess={wordToGuess} playedLetters={playedLetters} lives={lives}/>
         <KeyBoard playedLetters={playedLetters} setPlayedLetters={setPlayedLetters} random={random} count={count} setCount={setCount} lives={lives}/>
         <Hangman index={maxLives-lives}/>
        
    </div>
    )
}
