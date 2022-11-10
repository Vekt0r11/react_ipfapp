export const getJWT = async (user, pass) => {
  const URL = 'http://192.168.0.19:4000/usuario/login'

  const body = JSON.stringify({
    nombreUsuario: user,
    contrasenia: pass
  })

  const config = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  }

  const response = await fetch(URL, config)
    .then(response => {
      return response.json()
    })

  return response
}