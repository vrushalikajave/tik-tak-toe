import React from 'react'
import "./style.css"
import Box from './Box'
import { useState } from 'react'
import { useEffect } from 'react'


const clearState = ["" , "", "" , "", "" , "", "" , "", "" ]
const App = () => {

  const [ gameState, setGameState]= useState(clearState);
  const [ isXchance, setIsXchance]= useState(false);

  const userClick =(index)=> {
    let string = Array.from(gameState);
    if(string[index])
    return;
    string[index]= isXchance ? "x" : "0"
    setIsXchance(!isXchance)
    setGameState(string)
  }

  const clearGame =()=>{
    setGameState(clearState)
  }

  useEffect(() =>{
    let winner = checkWinner();
    console.log(winner)

    if(winner)
    {
      clearGame()
    }
  },[gameState])

  const checkWinner= ()=>{
    const lines= [
      [0,1,2],[3,4,5], [6,7,8],[0,3,6],
      [1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];

    console.log(`class : App, function checkWinner == ` , gameState[0], gameState[1], gameState[2]);

    
  }
  return (
    <div className='header'>
      <p className='header-text'>Tic Tac Toe</p>

      <div className='row'>
        <p>x</p>
        <p>x</p>
        <p>x</p>
      </div>

      <div className='row'>
        <p>x</p>
        <p>x</p>
        <p>x</p>
      </div>

      <div className='row'>
        <p>x</p>
        <p>x</p>
        <p>x</p>
      </div>
    </div>
  )
}

export default App
