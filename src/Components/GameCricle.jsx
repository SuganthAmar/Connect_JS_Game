import React from 'react'
import './Game.css'

export default function GameCricle({id,children,className,onCircleClicked}) {
    return (
    <div className={`gamecircle ${className}`} onClick={()=>onCircleClicked(id)}>
        {children}
        </div>
  )
}
