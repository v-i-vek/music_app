import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

function App() {

 

  return (<>
    <BrowserRouter>
    
 <Routes>
    <Route path='/home' element={<Home/>}>
    </Route>
  </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
