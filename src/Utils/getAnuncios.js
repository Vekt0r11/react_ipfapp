export const getAnuncios = async (id) => {
  //Obtener id del reducer de usuario//
  // const id = '6357f74d2a7f4258bf33d5e3'

  const URL = `http://localhost:4000/anuncio/propio/${id}`

  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const anuncios = await fetch(URL, config)
    .then(anuncios => {
      return anuncios.json()
    })
  return anuncios
}