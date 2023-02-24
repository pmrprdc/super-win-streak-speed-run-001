import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CurrentWins from './components/Wins';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1> 
       Welcone To Super-Win-Streak
      </h1>
      <button>Add a win!</button>
      <CurrentWins/>
    </div>
  )
}

export default App
