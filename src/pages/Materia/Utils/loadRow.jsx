const loadRow = (cursantes, clases, openModal) => {
  return cursantes.map((cursante, key) => {

    const { _id, estudiante, asistencia, primerParcial, segundoParcial, final, isActive } = cursante
    const porcentajeAsistencia = Math.round((asistencia / clases) * 100)

    // if (isActive) {
    return (
      <tr key={key} className={porcentajeAsistencia < 60 ? 'alert-danger' : ''}>
        <th scope="row">{key + 1}</th>
        <td>{estudiante.infoPersonal.apellidos}</td>
        <td>{estudiante.infoPersonal.nombres}</td>
        <td>{`${porcentajeAsistencia}%`}</td>
        <td>{primerParcial > 0 ? primerParcial : '-'}</td>
        <td>{segundoParcial > 0 ? segundoParcial : '-'}</td>
        <td>{final > 0 ? final : '-'}</td>
        <td><button className="btn p-0" data-bs-toggle="modal" data-bs-target={`#editButton`} onClick={(e) => { openModal(e, cursante) }} >Editar</button></td>
      </tr>
    )
    // }
  })
}
export default loadRow