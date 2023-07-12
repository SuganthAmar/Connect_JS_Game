import React from 'react'
 
export default function Footer({onNewGameClick,onSuggestClick}) {
  return (
    <>
    <div className='footer'>
     <button onClick={onNewGameClick}>New Game</button>
    <button onClick={onSuggestClick}>Suggest</button>
      {/* <div className='credit'> */}
      
     
    </div>
    <div className='new'>
      <h1><a href='https://www.linkedin.com/in/suganth-a-a0144624b/'>Created By Suganth</a></h1>
      </div>
    
      </>
  )
}
