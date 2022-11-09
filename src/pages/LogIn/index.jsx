import React from 'react'
import { useStyles } from 'react-styles-hook'
import { getJWT } from '../../Utils/getJWT'

function LogIn() {

  const handleSubmit = (e) => {
    e.preventDefault()

    const { nombreUsuario, contrasenia } = document.forms[0]

    const response = getJWT(nombreUsuario.value, contrasenia.value)
      .then(res => { sessionStorage.setItem('token', res.token) })

    console.log(sessionStorage.getItem('token'))

  }

  return (
    <div className='d-flex' style={styles.container}>
      <div className='row col-3'>
        <form onSubmit={data => handleSubmit(data)} className='form-control'>
          <div className='mb-3'>
            <label htmlFor='usuario' className='form-label'>Nombre de usuario</label>
            <input type='input' name='nombreUsuario' className='form-control' id='nombreUsuario' />
          </div>
          <div className='mb-3'>
            <label htmlFor='contrasenia' className='form-label'>Contraseña</label>
            <input type='password' name='contrasenia' className='form-control' id='contrasenia' />
          </div>
          <button className='bg-primary form-control text-light' type="submit" >Iniciar sesión</button>
        </form>
      </div>
    </div>
  )
}

const styles = useStyles({
  container:{
    justifyContent: 'center',
    verticalAlign: 'middle',
    height: '100%',
    
  }
})

export default LogIn