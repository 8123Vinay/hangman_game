import React from 'react'
import {useState} from 'react'
import {Game, GameOver,Start} from './components'
import './styles/main.scss'
import KeyBoard from './components/KeyBoard'




// I will display winning if the word pool is equal to the number of elements in the word;

function App() {
  const [start,setStart]=useState(false);
 return(
   <div className='App'>
      <Start setStart={setStart} start={start}/>
      <Game start={start}/>
   </div>
 )
}

export default App;
