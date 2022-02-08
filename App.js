import React from 'react'
import {useState} from 'react'
import {Game, GameOver,Start} from './components'
import './styles/main.scss'



// I will display winning if the word pool is equal to the number of elements in the word;

function App() {
  const [lives, setLives]=useState(6);
  const [start,setStart]=useState(false);
 return(
   <div className='App'>
      <Start setStart={setStart} start={start}/>
      <Game  lives={lives} setLives={setLives} start={start}/>
      <GameOver lives={lives}/>
   </div>
 )
}

export default App;
