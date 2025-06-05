import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
      <h1 className='bg-green-400 p-4 text-black rounded-xl mb-4'>Tailwind CSS</h1>
      <div className="flex">
        <Card title="First Card" btnText="Click Me" />
        <Card title="Second Card" />
      </div>
    </>
  )
}

export default App
