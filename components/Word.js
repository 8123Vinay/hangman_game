import React from 'react'

export default function Word({wordToGuess,playedLetters,lives}) {
  return (
    <div className="wordSpace">
         {wordToGuess.map((x,i)=>{
             return(
              <div className="place" >
                <h1 className={(playedLetters.has(x) || !lives) ? "wordVisible":"wordHidden"} key={i}>{x}</h1>
                <h1 className="space">__</h1>
              </div>
             )
           })}
    </div>
  )
}
