import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);
  
  const onChange = (e) => {
    setAmount(e.target.value)
  }

  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current => !current))
  };
  
  return (
    <>
    <div>Converter</div>
    <div>
      <label htmlFor="amount">Minutes</label>
      <input id='amount' type="number" placeholder='Minutes' value={flipped ? amount * 60 : amount}
      disabled={flipped === true} onChange={onChange} />
    </div>
    <div>
      <label htmlFor="hours">Hours</label>
      <input id='hours' type="number" placeholder='Hours' value={flipped ? amount : Math.round(amount / 60)}
      disabled={flipped === false} onChange={onChange} />
    </div>
    <button>Reset</button>
    <button onClick={onFlip}>Flip</button>
    </>
  )
}

export default App
