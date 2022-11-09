import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const AuthUser = () => {
  const token = ''
  
  return token && valid
}

export default function ProtectedRoutes() {
  const isAuth = AuthUser()
  return isAuth ? <Outlet /> : <Navigate to='/login'/>
}
