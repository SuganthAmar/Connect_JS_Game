 import React from 'react'
 import { GAME_STATE_DRAW, GAME_STATE_PLAYING,
  GAME_STATE_WIN } from '../Constants';
 export default function Header({gameState,currentPlayer,winPlayer}) {
  const renderLabel = () =>{
    switch(gameState){
        case GAME_STATE_PLAYING:
          return <div>Player {currentPlayer} Turn</div>
        case GAME_STATE_WIN:
          return <div>Player {winPlayer} Wins</div>
        case GAME_STATE_DRAW:
          return <div>Game is DRAW!</div>
        default:
    }
  }
   return (
     <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
     </div>
   )
 }
 