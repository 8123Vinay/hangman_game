import React from 'react'

export default function Hangman({index}) {
  return (
<div className="hangman_container">
 <div className={`hangman hangman-${index}`}>
  <div className="hangman_element"></div>
  <div className="hangman_element"></div>
  <div className="hangman_element"></div>
  <div className="hangman_element"></div>
  <div className="hangman_element"></div>
  <div className="hangman_element"></div>
</div>
  <div className="pole"></div>
  <div className="rope"></div>
</div>
  )
}
