import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)


  function addCounter() {
    setCounter(counter + 1)
  }

  function decCounter() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter in React</h1>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addCounter}>+ value</button> &nbsp;
      <button onClick={decCounter}>- value</button>
    </>
  )
}

export default App
