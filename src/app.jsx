import { useState } from 'preact/hooks'
import './app.css'
import Calculator from "./components/Calculator/Calculator.jsx";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Calculator/>
    </div>
  )
}
