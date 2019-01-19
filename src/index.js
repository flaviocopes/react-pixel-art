import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'

function App() {
  const [color, setColor] = useState(0)

  return (
    <div className="App">
      <ColorPicker currentColor={color} setColor={color => setColor(color)} />
      <Canvas currentColor={color} />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
