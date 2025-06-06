import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number , setNumber] = useState(false)
  const [char , setChar] = useState(false)
  const [password, setPassword] = useState()

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(number) str += '0123456789';
    if(char) str += '!@#$%^&*()_+{}~|?`';

    for (let i = 0; i <= length; i++) {
      let charecter = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charecter)
    }

    setPassword(pass)

  }, [length, number, char, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-700 mt-10">
        <h1 className='text-orange-500 text-center mb-3'>Password Generator</h1>
        <div className='flex rounded-lg shadow overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3 bg-white' type="text" value={password}
           placeholder='password' ref={passwordRef} readOnly />
          <button className='ouline-none bg-blue-700 text-white px-3 py-0 shrink-0' onClick={copyPassword}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 mt-6'>
          <div className="flex item-center gap-x-1">
            <input className='cursor-pointer' type="range" min={0} max={20} value={length}
            onChange={(e) => setLength(e.target.value)} />
            <label>Length ({length})</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" id='numbers' defaultChecked={number} onChange={() => {setNumber((prev) => !prev)} } />
            <label htmlFor='numbers'>Numbers </label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox" id="charecters" defaultChecked={char} onChange={() => {setChar((prev) => !prev)} } />
            <label htmlFor='charecters'>Charecters </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
