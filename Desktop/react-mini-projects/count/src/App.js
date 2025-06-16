import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState('');
  const handleStepChange = (e) => {
    setStep(e.target.value);
  };

  const add = () => {
    const value = step !== '' ? Number(step) : 1;
    setCount(count + value);
    setStep('');
  };

  const del = () => {
    const value = step !== '' ? Number(step) : 1;
    setCount(prev => Math.max(0, prev - value));
    setStep('');
  };

  const res = () => {
    setCount(0);
    setStep('');
  };

  return (
    <div className="container">
      <div className="counter-box">
        <h2>Counter</h2>
        <p className="count">{count}</p>

        <input
          type="number"
          placeholder="Step value"
          value={step}
          onChange={handleStepChange}
          className="input"
        />
        <div className="button-group">
          <button onClick={add}>Increase</button>
          <button onClick={del}>Decrease</button>
          <button onClick={res}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
