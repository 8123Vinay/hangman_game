import React,{useContext} from 'react'
let string="QWERTYUIOPASDFGHJKLZXCVBNM";
import {playSession} from '../apis/session.js'
import '../styles/Keyboard.css'
let array=[...string];
import {appContext} from '../App.js'
export default function KeyBoard({response,setResponse}) {
  const {margin,width}=useContext(appContext)
  
  let keyWidth=(800/15)
  if(width<800){
    keyWidth=Math.min(width/10, keyWidth) 

  }

  console.log(width) 
  if(!response.result){
  return (
    <div className='keyBoard' >
      {array.map((letter,index)=>{
        return(
          <button key={index} className="keys"  style={{width:keyWidth,height:keyWidth}}
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
