import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Toggle from './Component/Toggle'

function App() {
  return (
    <Routes>
    <Route path='' element ={<Toggle/>}/>
    </Routes>
  )
}

export default App