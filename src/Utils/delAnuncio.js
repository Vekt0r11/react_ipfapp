const delAnuncio = async (id) => {

  const URL = `http://localhost:4000/anuncio/${id}`

  const config = {
    method: 'DELETE',
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
export default delAnuncio