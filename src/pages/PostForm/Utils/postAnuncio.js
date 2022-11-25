const postAnuncio = async (anuncio, method) => {

  const URL = `http://localhost:4000/anuncio${method === 'POST' ? '/create' : ''}`

  const config = {
    body: JSON.stringify(anuncio),
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const response = await fetch(URL, config)
    .then(response => {
      return response.json()
    })
  return response
}
export default postAnuncio