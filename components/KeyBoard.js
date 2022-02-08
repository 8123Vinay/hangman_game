import React from 'react'
let string="QWERTYUIOPASDFGHJKLZXCVBNM";
let array=[...string];
export default function KeyBoard({playedLetters,setPlayedLetters,random,lives, setLives}) {
  return (
    <div className='keyBoard' >
      {array.map((letter,index)=>{
        return(
          <button className="keys" key={index}
          onClick={(event)=>{
            let letterPressed=event.target.innerText
            if(random.includes(letterPressed)){
              let newSet=new Set(playedLetters);
              newSet.add(letterPressed);
              setPlayedLetters(newSet);
              event.target.disabled=true;
            }
            else{
              setLives(lives-1);
            }
           
          }}>{letter}</button>
        )
      })}
    </div>
  )
}
