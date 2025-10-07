import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import { Login } from './pages/Login'
import { PrivateRoute } from './routes/PrivateRoute'

function App() {

 

  return (<>
    <BrowserRouter>
    
 <Routes>
    
    <Route path='/login' element={<Login/>}/>
    <Route element={<PrivateRoute/>}>
      <Route path='/home' element={<Home/>}/>
    </Route>
  </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
