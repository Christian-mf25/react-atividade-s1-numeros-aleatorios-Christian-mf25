// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  const randomNumber = () =>{
    setNumber(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <span> 
          <h2> {number} </h2> 
        </span>

        <button onClick = {randomNumber}> Random num  </button>

      </header>
    </div>
  );
}

export default App;
