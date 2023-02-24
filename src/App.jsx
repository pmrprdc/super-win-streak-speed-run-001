import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CurrentWins from './components/Wins';




function App() {
  const [wins, setWins] = useState(["win1", "win2"]);

  return (
    <div className="App">
      <h1> 
       Welcone To Super-Win-Streak
      </h1>
      <button>Add a win!</button>
      <CurrentWins wins={wins}/>
    </div>
  )
}

export default App
