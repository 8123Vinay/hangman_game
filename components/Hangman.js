import React,{useContext} from 'react'
import '../styles/Hangman.css'
import {appContext} from '../App.js'
let lives=0;

export default function Hangman({index}) {
  const {margin}=useContext(appContext);

  function check(val){
    if(val>0){
      return true;
    }
    return false;
  }

  //check for te screen width and then apply left and right
  
  return (
   <div className="hangman-div" >

{/*     
     <svg width="400" height="600" className="hangman-container" >
   
        <line x1="50" y1="50" x2="50" y2="500" />
        <line x1="50" y1="50" x2="200" y2="50" />
        <line x1="200" y1="50" x2="200" y2="90" />
        <line x1="10" y1="500" x2="90" y2="500" />

         

        <circle cx="200" cy="140" r="50" className={check(6-lives) ? "" :"hangman" }/>
        <line x1="200" y1="190" x2="200" y2="410" className= {check(5-lives)? "" :"hangman" } id="first" />
        <line x1="200" x2="150" y1="220" y2="270" className= {check(4-lives)? "" :"hangman" }/>
        <line x1="200" x2="250" y1="220" y2="270" className= {check(3-lives)? "" :"hangman" }/>
        <line x1="200" x2="150" y1="330" y2="370" className= {check(2-lives)? "" :"hangman" }/>
        <line x1="200" x2="250" y1="330" y2="370" className= {check(1-lives)? "" :"hangman" }/>
       
      
        <circle cx="180" cy="120" r="6"  fill="white" stroke-width="0" className={check(1-lives)? "" :"hangman" }/>
        <circle cx="220" cy="120" r="6"  fill="white" stroke-width="0" className={check(1-lives)? "" :"hangman" }/>
        <line x1="180" x2="220" y1="160" y2="160"  className={check(1-lives)? "" :"hangman" } />
     </svg> 
 
  <svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg> */}
<svg height="300" width="300">
<line x1="50" y1="250" x2="150" y2="250" />
    <line x1="100" y1="250" x2="100" y2="20" />
    <line x1="100" y1="20" x2="200" y2="20" />
    <line id="rope" x1="200" y1="20" x2="200" y2="60" />

    {/* this is hangman */}


  <g id="body">
    <g id="head">
    <circle cx="200" cy="80" r="20" stroke="black" strokeWidth="4" fill="white" className={check(6-lives)? "" :"hide" }/>
      <g id="rEyes" className={check(1-lives)? "" :"hide" }>
      <circle cx="193" cy="80" r="4"/>
      <circle cx="207" cy="80" r="4"/>
      </g>
    </g>
    <line x1="200" y1="100" x2="200" y2="150" className={check(5-lives)? "" :"hide" }/ >
    <line id="armL" x1="200" y1="120" x2="170" y2="140" className={check(4-lives)? "" :"hide" }/ >
    <line id="armR" x1="200" y1="120" x2="230" y2="140" className={check(3-lives)? "" :"hide" }/ >
    <line id="legL" x1="200" y1="150" x2="180" y2="190" className={check(2-lives)? "" :"hide" }/ >
    <line id="legR" x1="200" y1="150" x2="220" y2="190" className={check(1-lives)? "" :"hide" }/ >
  </g>
  </svg>
   </div>
  )
}
