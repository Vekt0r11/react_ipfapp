import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn'
import NavBar from './components/NavBar'
import OffcanvasMenu from './components/OffcanvasMenu'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      <OffcanvasMenu/>

      <Routes>
        //Public routes
        <Route path='/' element={<></>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<></>} />
        <Route path='*' element={<>Error 404</>} />
        <Route path='/inicio' element={<Home />} />

        {/* <Route element={<>Protected routes here</>}>
          <Route path='/inicio' element={<></>} />

          <Route path='/perfil/*' element={<></>} >
            <Route path='editar' element={<></>} />
          </Route>
        </Route> */}

      </Routes>

      {/* Footer here (?)*/}
      
    </BrowserRouter>
  )
}

export default App
