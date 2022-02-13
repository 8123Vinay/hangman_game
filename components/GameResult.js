import React from 'react'

export default function GameOver({lives}) {
  if(lives==0){
    return (
      <div className="gameOver">
        <h1 className="overText">Game Over</h1>
      </div>
    )
  }

  else{
    return(
      <div>
        <h1 className="header">Congratulations You Have WON The Game.</h1>
      </div>
    )
  }
  
}
