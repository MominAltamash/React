import { useState } from "react"

function App() {

  const [color, setColor] = useState('#000')
setColor()
  return (
    <>
      <div className="w-full h-full" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            Test Buttons
          </div>
        </div>
      </div>
    </>
  )
}

export default App
