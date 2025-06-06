// import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 mt-10">
        <h1 className='text-orange-500 text-center mb-3'>Password Generator</h1>
        <div className='flex rounded-lg shadow overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3 bg-white' type="" placeholder='password' readOnly />
          <button className='ouline-none bg-blue-700 text-white px-3 py-0 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mt-6'>
          <div className="flex item-center gap-x-1">
            <input className='cursor-pointer' type="range" min={8} max={100} value=""
            onChange={(e) => e.target.value} />
            <label>Length: </label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" id='numbers' defaultChecked="" onChange={() => {} } />
            <label htmlFor='numbers'>Numbers </label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" id="charecters" defaultChecked="" onChange={() => {} } />
            <label htmlFor='charecters'>Charecters </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
