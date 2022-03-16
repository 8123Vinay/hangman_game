import React from 'react'
import {useState,createContext} from 'react'
import {Game, GameOver,Start,PlayNext,Hangman} from './components'
import KeyBoard from './components/KeyBoard'

import './styles/App.css'
export const appContext=createContext({name:"vinay"})

// I want to change scss to normal tailwind CSS

function App() {
  const [start,setStart]=useState(false);
  const [response,setResponse]=useState({
    "maskedWord": [
        "_",
        "_",
        "_",
        "_",
        "_"
    ],
    "livesLeft": 6,
    "result": false,
    "id": 15
});


  // console.log(response);
  let width=window.innerWidth;
  let margin=((width-800)/2)+"px"
  // console.log(width,margin)
  let styleObject={position:"relative"};
  if(width>800){
     styleObject={
      position:"relative",
      left:margin,
     }
  }
  function check(val){
    if(val>0){
      return true;
    }
    return false;
  }

 return(
   
   <div className="App" style={styleObject} >
   <appContext.Provider value={{check,width}} >
   <Hangman />
      <Start setStart={setStart} start={start} response={response} setResponse={setResponse}/>
      <Game start={start} response={response} setResponse={setResponse} />
      <PlayNext result={response.result} name={response.name} setResponse={setResponse}/>
    </appContext.Provider>
   </div>
 )
}

export default App;
