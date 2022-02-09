import React from 'react'

export default function GameOver({lives}) {
  return (
    <div className={lives>0 ? 'hide' :"gameOver"}>
      <h1 className="overText">Game Over</h1>
      <h1 className="reloadText">Reload to Play Again</h1>
    </div>
  )
}
