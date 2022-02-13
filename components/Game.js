import React,{useState} from 'react'
import KeyBoard from './KeyBoard'
import Hangman from './Hangman'
import Word from './Word';
import GameResult from './GameResult'

export default function Game({start,response,setResponse}) {

    return (
      <div style={{display: (start) ?"block" : "none"}} className="game" >
         <div className={(response.result ? "hide" :"header")}> 
         <h1 className="Title"> Hangman Game!</h1>
         <h1 className="lives">  Lives : {response.livesLeft}</h1>
         </div>

         <div className={response.result ? "": 'hide'}> 
         <GameResult lives={response.livesLeft} result={response.result}/>
         </div>

         <Word maskedWord={response.maskedWord}/>

         <KeyBoard response={response} setResponse={setResponse} />

         <Hangman index={6-(response.livesLeft)}/>
        
    </div>
    )
}
