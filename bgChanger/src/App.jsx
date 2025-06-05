import { useState } from "react"

function App() {

  const [color, setColor] = useState('#000');
  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="px-2 py-1 rounded ouline-0" onClick={() => setColor('red')} style={{backgroundColor: "red"}}>Red</button>
            <button className="px-2 py-1 rounded ouline-0" onClick={() => setColor('green')} style={{backgroundColor: "green"}}>Green</button>
            <button className="px-2 py-1 rounded ouline-0" onClick={() => setColor('blue')} style={{backgroundColor: "blue"}}>Blue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
