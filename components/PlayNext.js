import React from 'react'
import {createSession} from '../apis/session'
export default function PlayNext({result,name,setResponse}) {
  return (
    <div className={result ? "":'hide'}>
      <button className="play_next"
      onClick={async ()=>{
          let response=await createSession(name);
          setResponse(response);
      }}>Play Again</button>
    </div>
  )
}
