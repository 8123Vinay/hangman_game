import React from 'react'
import {useState} from 'react'
import {Game, GameOver,Start,PlayNext} from './components'
import './styles/main.scss'
import KeyBoard from './components/KeyBoard'





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
  console.log(response);
  

 return(
   <div className="App">
      <Start setStart={setStart} start={start} response={response} setResponse={setResponse}/>
      <Game start={start} response={response} setResponse={setResponse} />
      <PlayNext result={response.result} name={response.name} setResponse={setResponse}/>
   </div>
 )
}

export default App;
