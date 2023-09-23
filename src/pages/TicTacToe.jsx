import React from 'react'
import "../styles/tic-tac-toe.css"
import Box from '../components/box'

function TicTacToe() {
    
  return (
    <div id='main-container'>
        <div id='tic-tac-toe'>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </div>
    </div>
  )
}

export default TicTacToe