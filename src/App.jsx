import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CurrentWins from './components/Wins';
import styled from "styled-components"

const AppDiv = styled.div`
  width: 50%;
  background-color: green;
  margin: 0 auto;
  border-radius: 20px;
  font-family: 'Gajraj One', cursive;


`



function App() {
  const [wins, setWins] = useState(["win1", "win2"]);

  return (
    <AppDiv className="App">
      <h1 style={{fontSize: "20px"}}> 
       Welcone To Super-Win-Streak
      </h1>
      <button>Add a win!</button>
      <CurrentWins wins={wins}/>
    </AppDiv>
  )
}

export default App
