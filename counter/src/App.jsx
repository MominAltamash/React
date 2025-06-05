import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)


  function addCounter() {
    if(counter < 20) {
      // increase only one value
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)

      // increase by 4 or increase 4 times
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
    } else {
      setCounter(counter)
    }
  }

  function decCounter() {
    if(counter >0) {
      setCounter(counter - 1)
    } else {
      setCounter(counter)
    }
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
