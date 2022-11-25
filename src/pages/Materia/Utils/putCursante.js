const putCursante = async (idmateria, idcursante, body) => {
  const URL = `http://localhost:4000/materia/cursante/?idmateria=${idmateria}&idcursante=${idcursante}`

  console.log(body)
  const config = {
    body:JSON.stringify(body),
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const update = await fetch(URL, config)
    .then(update => {
      return update.json()
    })
  return update
}

export default putCursante