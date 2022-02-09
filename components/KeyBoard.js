import React from 'react'
let string="QWERTYUIOPASDFGHJKLZXCVBNM";
let array=[...string];
export default function KeyBoard({playedLetters,setPlayedLetters,random,count,setCount,lives}) {
  if(lives>0){
  return (
    <div className='keyBoard' >
      {array.map((letter,index)=>{
        let disable=playedLetters.has(letter);
        return(
          <button className={disable ? "keysAfter" : "keysBefore"} key={index} 
          onClick={(event)=>{
            let letterPressed=event.target.innerText
            let newSet=new Set(playedLetters);
            newSet.add(letterPressed);
            setPlayedLetters(newSet);
            if(random.includes(letterPressed)){
              setCount(count+1)
            }
            event.target.disabled=true;
           
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
          let disable=playedLetters.has(letter);
          return(
            <button className={disable ? "keysAfter" : "keysBefore"} key={index} disabled
            onClick={(event)=>{
              let letterPressed=event.target.innerText
              let newSet=new Set(playedLetters);
              newSet.add(letterPressed);
              setPlayedLetters(newSet);
              if(random.includes(letterPressed)){
                setCount(count+1)
              }
              event.target.disabled=true;
             
            }}>{letter}</button>
          )
        })}
      </div>
     )
  }
}
