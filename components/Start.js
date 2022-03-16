import React,{useState} from 'react'
import {createSession} from '../apis/session.js'
import '../styles/Start.css'

export default function Start({setStart,start,setResponse}) {
   const [name,setName]=useState("");
  return (
    <div style={{display:!start ?"block" :"none"}} className="start">
      <h1 className="">Save Hangman!</h1>
      <input type="text" placeholder="enter the userName" onChange={(e)=>{
         setName(e.target.value)
      }} className="input-field"/> 
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
