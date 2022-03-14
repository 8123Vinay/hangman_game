import React from 'react'
import '../styles/Hangman.css'

let lives=0;

export default function Hangman({index}) {
  function check(val){
    if(val>0){
      return true;
    }
    return false;
  }
  return (
   <div>
    
     <svg width="400" height="600" className="hangman-container" >
     {/* this is pole */}
        <line x1="50" y1="50" x2="50" y2="500" />
        <line x1="50" y1="50" x2="200" y2="50" />
        <line x1="200" y1="50" x2="200" y2="90" />
        <line x1="10" y1="500" x2="90" y2="500" />
        {/* this is hangman */}
         

        <circle cx="200" cy="140" r="50" className={check(6-lives) ? "" :"hangman" }/>
        <line x1="200" y1="190" x2="200" y2="410" className= {check(5-lives)? "" :"hangman" }/>
        <line x1="200" x2="150" y1="220" y2="270" className= {check(4-lives)? "" :"hangman" }/>
        <line x1="200" x2="250" y1="220" y2="270" className= {check(3-lives)? "" :"hangman" }/>
        <line x1="200" x2="150" y1="330" y2="370" className= {check(2-lives)? "" :"hangman" }/>
        <line x1="200" x2="250" y1="330" y2="370" className= {check(1-lives)? "" :"hangman" }/>
       
        {/* creating the eyes */}
        <circle cx="180" cy="120" r="6"  fill="black" stroke-width="0" className={check(1-lives)? "" :"hangman" }/>
        <circle cx="220" cy="120" r="6"  fill="black" stroke-width="0" className={check(1-lives)? "" :"hangman" }/>
        <line x1="180" x2="220" y1="160" y2="160"  className={check(1-lives)? "" :"hangman" } />
     </svg> 
 
  {/* <svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg> */}
   </div>
  )
}
