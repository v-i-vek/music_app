import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { Login } from './pages/Login'

function App() {

 

  return (<>
    <BrowserRouter>
    
 <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
