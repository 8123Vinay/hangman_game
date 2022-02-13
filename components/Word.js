import React from 'react'

export default function Word({maskedWord}) {
  return (
    <div className="wordSpace">
         {maskedWord.map((letter,i)=>{
             return(
                <h1 className="word"key={i}>{letter.toUpperCase()}</h1>
             )
           })}
    </div>
  )
}
