import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from 'react-styles-hook'
import { useNavigate } from 'react-router-dom'

import { getJWT } from '../../Utils/getJWT'
import { getUserInfo } from '../../Utils/getUserInfo'
import Loader from '../../components/Loader'

function LogIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const userInfo = useSelector(state => state.user)
  const [error, setError] = useState({})

  const handleLogIn = (e) => {
    e.preventDefault()

    const { nombreUsuario, contrasenia } = document.forms[0]

    const response = getJWT(nombreUsuario.value, contrasenia.value)
      .then(res => {

        if (res.loggedIn) {
          setError({ msg: res.msg, status: res.loggedIn })
          sessionStorage.setItem('token', res.token)

          const userInfo = getUserInfo(res.token)

          return userInfo
        } else {
          setError({ msg: res.msg, status: res.loggedIn })

          return res.loggedIn
        }

      })
      .then(userInfo => userInfo && dispatch({ type: '@user/updateUser', payload: userInfo }))
  }

  useEffect(() => {

    if (error.status) {
      setTimeout(() => {
        navigate('/inicio')
      }, 1500);
    }

  }, [error])

  return (
    <div className='d-flex' style={styles.container}>
      <div className='row col-3'>
        <form onSubmit={data => handleLogIn(data)} className='form-control'>
          <div className='mb-3'>
            <label htmlFor='usuario' className='form-label'>Nombre de usuario</label>
            <input type='input' name='nombreUsuario' className='form-control' id='nombreUsuario' />
          </div>
          <div className='mb-3'>
            <label htmlFor='contrasenia' className='form-label'>Contraseña</label>
            <input type='password' name='contrasenia' className='form-control' id='contrasenia' />
          </div>
          {
            error.msg &&
            <div className={error.status ? 'alert alert-success d-flex align-items-center justify-content-evenly' : 'alert alert-danger d-flex align-items-center justify-content-evenly'}>
              {error.msg}
              {
                error.status && <Loader />
              }
            </div>
          }
          <button className='bg-primary form-control text-light' type="submit" >Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

const styles = useStyles({
  container: {
    justifyContent: 'center',
    verticalAlign: 'middle',
    height: '100%',

  }
})

export default LogIn