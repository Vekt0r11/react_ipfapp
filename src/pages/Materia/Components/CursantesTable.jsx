import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useStyles } from 'react-styles-hook'

//Utils
import loadOtp from '../Utils/loadOtps'
import loadRow from '../Utils/loadRow'
import putCursante from '../Utils/putCursante'

const CursantesTable = ({ props }) => {

  const dispatch = useDispatch()

  const { idMateria, cursantes, clases } = props

  const [modalCursanteInfo, setmodalCursanteInfo] = useState(cursantes[0])
  const [updatedInfo, setUpdatedInfo] = useState({})

  const openModal = (e, cursante) => {
    e.preventDefault()
    setmodalCursanteInfo(cursante)
    setUpdatedInfo({
      estudiante: cursante._id,
      asistencia: modalCursanteInfo.asistencia,
      primerParcial: modalCursanteInfo.primerParcial,
      segundoParcial: modalCursanteInfo.segundoParcial,
      final: modalCursanteInfo.final,
      isActive: true
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault

    // console.log(updatedInfo)
    putCursante(idMateria, updatedInfo._id, updatedInfo)
      .then((res) => {
        console.log(res)
      })
  }

  const handleChange = (e) => {
    let { name, value } = e.target

    setUpdatedInfo({
      ...updatedInfo,
      [name]: parseInt(value)
    })
  }

  useEffect(() => {

  }, [updatedInfo])

  return (
    <div style={styles.container}>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Nombres</th>
            <th scope="col">Asistencia</th>
            <th scope="col">1° Parcial</th>
            <th scope="col">2° Parcial</th>
            <th scope="col">Final</th>
            <th scope="col">Gestión</th>
          </tr>
        </thead>
        <tbody>
          {
            loadRow(cursantes, clases, openModal)
          }
        </tbody>
      </table>

      {
        modalCursanteInfo ?
          <div className="modal fade" id='editButton' tabIndex="-1" aria-labelledby='editButtonLabel' aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id='editButtonLabel'>{`${modalCursanteInfo.estudiante.infoPersonal.apellidos}, ${modalCursanteInfo.estudiante.infoPersonal.nombres}`}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form action="" className='row p-3 flex-row align-items-baseline'>
                    <div className='row mb-3'>
                      <div className="col-3">
                        <label htmlFor=".form-select" className="form-label">Asistencia</label>
                        <input
                          className="form-control"
                          type="number"
                          name='asistencia'
                          placeholder={updatedInfo.asistencia}
                          max={clases} min={0}
                          aria-label="default input example"
                          onChange={handleChange}></input>
                      </div>
                    </div>
                    <div className='col-4'>
                      <label htmlFor=".form-select" className="form-label">Primer Parcial</label>
                      <select className="form-select" type="text" name='primerParcial' value={updatedInfo.primerParcial} onChange={handleChange}>{loadOtp()}</select>
                    </div>
                    <div className='col-4'>
                      <label htmlFor=".form-select" className="form-label">Segundo Parcial</label>
                      <select className="form-select" type="text" name='segundoParcial' value={updatedInfo.segundoParcial} onChange={handleChange}>{loadOtp()}</select>
                    </div>
                    <div className='col-4'>
                      <label htmlFor=".form-select" className="form-label">Final</label>
                      <select className="form-select" type="text" name='final' value={updatedInfo.final} onChange={handleChange}>{loadOtp()}</select>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <input type="submit" className="btn btn-primary" onClick={(e) => { handleSubmit(e) }}></input>
                </div>
              </div>
            </div>
          </div>
          : null
      }
    </div>
  )
}

const styles = useStyles({
  container: {
    height: '60vh',
    width: '100vw'
  }
})

export default CursantesTable