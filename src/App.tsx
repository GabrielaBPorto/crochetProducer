import { useState } from 'react'
import './App.scss'
import { Header } from "./components/Header/headers"
import { Body } from "./components/Body/body"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height: '95vh', padding: 0, margin: 0}}>
      <Header />
      <Body />
    </div>
    
  )
}

export default App
