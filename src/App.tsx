import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getRandomWord } from './getRandomWord'
import Wordle from './Wordle'
import checkWordle from './checkWorlde'

function App (): JSX.Element {

  let word = getRandomWord();
  const wordle = checkWordle("about",word);
  return (
    <div className="App">
      <header className="App-header">
        Wordle
      </header>

      <main>
         <Wordle  wordle={wordle}></Wordle>
      </main>
    </div>
  )
}

export default App
