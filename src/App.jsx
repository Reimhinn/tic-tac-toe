import './styles/app.css'
import TicTacToe from './pages/TicTacToe'
import React, {useState} from 'react';

export const Context = React.createContext()

function App() {

  const [nextSymbol, setNextSymbol] = useState('X');

  return (
  <Context.Provider value={[nextSymbol, setNextSymbol]}>
    <div id='app'>
      <TicTacToe />
    </div>
  </Context.Provider>
  )
}

export default App
