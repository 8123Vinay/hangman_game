import React from 'react'

export default function Word({wordToGuess,playedLetters}) {
  return (
    <div className="wordSpace">
         {wordToGuess.map((x,i)=>{
             return(
              <div className="place" >
                <h1 className="word" style={{visibility: playedLetters.has(x) ? "visible" :"hidden"}} key={i}>{x}</h1>
                <h1 className="space">__</h1>
              </div>
             )
           })}
    </div>
  )
}
