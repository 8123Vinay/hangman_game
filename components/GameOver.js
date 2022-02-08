import React from 'react'

export default function GameOver({lives}) {
  return (
    <div style={{display: lives >0 ? "none" :"Block"}} className="w-full ml-80 mt-72">
      <h1 className="text-4xl text-red-600 ml-60">Game Over</h1>
      <h1 className="text-2xl text-red-600 ml-56">Reload to Play Again</h1>
    </div>
  )
}
