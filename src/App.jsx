import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes, Navigate } from 'react-router-dom'
//Components
import OffcanvasMenu from './components/OffcanvasMenu'
import NavBar from './components/NavBar'
//Pages
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import Materia from './pages/Materia'
import PostForm from './pages/PostForm'
import { useSelector } from 'react-redux'

function App() {
  const user = useSelector(state => state.user)

  const ProtectedRoute = ({ user, redirectPath = '/login', children }) => {
    if (!user.id) {
      return <Navigate to={redirectPath} replace />
    }

    return children ? children : <Outlet />
  }

  return (
    <BrowserRouter >
      <div style={{ backgroundColor: '#f2eee4' }}>

        <NavBar />
        <OffcanvasMenu />
        <Routes>
          {/* Public routes */}
          <Route path='/' element={<></>} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<></>} />
          {/* Protected routes */}
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/inicio' element={<Home />} />
            <Route path='/materia/:id' element={<Materia />} />
            <Route path='/anuncio' element={<PostForm />} />
          </Route>

          <Route path='*' element={<>Error 404</>} />
        </Routes>

        {/* Footer here (?)*/}
        
      </div>
    </BrowserRouter>
  )
}

export default App
