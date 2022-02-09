import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Home from './Home'
import Journal from './Journal'


function App () {  
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/journal' element={<Journal />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
