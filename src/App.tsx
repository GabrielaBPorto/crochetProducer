import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header/headers"
import { Body } from "./components/Body/body"


import * as HoverCard from '@radix-ui/react-hover-card';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Body />
    </div>
    
  )
}

export default App
