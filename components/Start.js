import React from 'react'

export default function Start({setStart,start}) {
  return (
    <div style={{display:!start ?"block" :"none"}} className="start">
      <h1 className="startTitle">Save Hangman!</h1> 
      <button className="startButton"
      onClick={()=>{
          setStart(true)}}>Start</button> 
    </div>
  )
}
