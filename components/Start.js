import React,{useState} from 'react'
import {createSession} from '../apis/session.js'

export default function Start({setStart,start,setResponse}) {
   const [name,setName]=useState("");
  return (
    <div style={{display:!start ?"block" :"none"}} className="start">
      <h1 className="startTitle">Save Hangman!</h1>
      <input type="text" placeholder="enter the userName" onChange={(e)=>{
         setName(e.target.value)
      }} className="input"/> 
      <button className="startButton"
      onClick={async ()=>{
          setStart(true)
          let newResponse=await createSession(name);
          setResponse(newResponse)
         }
        }
           
          >Start</button> 
    </div>
  )
}
