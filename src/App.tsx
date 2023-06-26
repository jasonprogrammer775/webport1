import { useState } from 'react'
import { MyCanvas } from './components/MyCanvas'
import { Overlay } from './components/Overlay'



function App() {


  return (
    <div className="h-screen">
      <Overlay />
      <MyCanvas />
   
    </div>
  )
}

export default App
