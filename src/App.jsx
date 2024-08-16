import { useState } from 'react'
import './App.css'
function App() {
  const [value, setvalue] = useState(0)

  return (
    <>
       <div className="container">
              <input type="text" value={value} className="display" disabled/>
              <div className="main">
                <div className="row">
                    <button  value="7" onClick={e =>  setvalue(value + e.target.value)}>7</button  >
                    <button value="8" onClick={e =>  setvalue(value + e.target.value)}>8</button>
                    <button value="9" onClick={e =>  setvalue(value + e.target.value)}>9</button>
                    <button value="/" className="operator" onClick={e =>  setvalue(value + e.target.value)}>/</button>
                </div>
                <div className="row">
                    <button value="4" onClick={e =>  setvalue(value + e.target.value)}>4</button>
                    <button value="5" onClick={e =>  setvalue(value + e.target.value)}>5</button>
                    <button value="6" onClick={e =>  setvalue(value + e.target.value)}>6</button>
                    <button value="*" className="operator" onClick={e =>  setvalue(value + e.target.value)}>*</button>
                </div>
                <div className="row">
                    <button value="1" onClick={e =>  setvalue(value + e.target.value)}>1</button>
                    <button value="2" onClick={e =>  setvalue(value + e.target.value)}>2</button>
                    <button value="3" onClick={e =>  setvalue(value + e.target.value)}>3</button>
                    <button value="-" className="operator" onClick={e =>  setvalue(value + e.target.value)}>-</button>
                </div>
                <div className="row">
                    <button value="C" className="operator" onClick={e =>  setvalue("")}>C</button>
                    <button value="0" onClick={e =>  setvalue(value + e.target.value)}>0</button>
                    <button value="=" className="operator" onClick={e =>  setvalue(e => eval(value))}>=</button>
                    <button value="+" className="operator" onClick={e =>  setvalue(value + e.target.value)}>+</button>
                </div>
              </div>

        </div>
    </>
  )
}

export default App
