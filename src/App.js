import { useState } from 'react';
import './App.css';

function App() {
  const [Weight, setWeight] = useState("")
  const [Intensity, setIntensity] = useState(1.7)
  const [gender, setGender] = useState(0)
  const [Result, setResult] = useState(0)

  //function calculate()
  const calculate = () => {
    let calories = 0
if (gender === 'male'){
  calories = (879 + 10.2 * Weight) * Intensity
  } else {
    calories = (795 + 7.18 * Weight) * Intensity 
}
setResult(calories)
  }
  return (
  <form>
    <div id="container">
      <div>
      <label>
        Weight <input type='number' value={Weight} onChange={e => setWeight(e.target.value)}></input>
      </label>
      </div>
    <div>
        <label>Intensity</label>
        <select value={Intensity} onChange={e => setIntensity(e.target.value)}>
          <option value="1.3">Light</option>
          <option value="1.5">Usual</option>
          <option value="1.7">Moderate</option>
          <option value="2">Hard</option>
          <option value="2.2">Very hard</option>
        </select>
    </div>
    <div>
      <label>Gender</label>
      <input type='radio' name='gender' value="male"onChange={e => setGender(e.target.value)}/><label>Male</label>
      <input type='radio' name='gender' value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
    </div>
    <div>
      <label>Result</label>
      <output>{Result.toFixed(0)}</output>
    </div>
    <div>
      <button type='button' onClick={calculate}>Calculate</button>
    </div>
    </div>
  </form>
  );
}

export default App;
