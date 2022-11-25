export const getMateriasEstudiante = async (id) => {
  //Obtener id del reducer de usuario//
  // const id = '6357f74d2a7f4258bf33d5e3'

  const URL = `http://localhost:4000/materia/asignadas/?estudiante=${id}`

  const config = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const materias = await fetch(URL, config)
    .then(materias => {
      return materias.json()
    })
  return materias
}