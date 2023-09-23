import React, {createElement, useContext, useState} from 'react'
import "../styles/box.css"
import { Context } from '../App';


function Box() {
    
    const [nextSymbol, setNextSymbol] = useContext(Context)

    const handleClick = (e) => {
        if (nextSymbol === 'X') {
            
        }
    };

    return (
        <div onClick={handleClick} className='box'>
            {symbol && <span className={symbol}>{symbol}</span>}
        </div>
    );
}

export default Box