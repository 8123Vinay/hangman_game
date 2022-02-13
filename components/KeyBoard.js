import React from 'react'
let string="QWERTYUIOPASDFGHJKLZXCVBNM";
import {playSession} from '../apis/session.js'
let array=[...string];

export default function KeyBoard({response,setResponse}) {
  if(!response.result){
  return (
    <div className='keyBoard' >
      {array.map((letter,index)=>{
        return(
          <button key={index} className="keysBefore" 
          onClick={async (event)=>{
            let newResponse=await playSession(response.id, event.target.innerText.toLowerCase())
            setResponse(newResponse);         
          }}>{letter}</button>
        )
      })}
    </div>
   )
  }
  else{
       
    return (
      <div className='keyBoard' >
        {array.map((letter,index)=>{
          return(
            <button key={index} className="keysBefore" disabled>{letter}</button>
          )
        })}
      </div>
     ) 
     
  }
}
