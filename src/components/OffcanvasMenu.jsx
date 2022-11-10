import React, { useEffect, useState } from 'react'
import { BiRightArrow } from 'react-icons/bi'
import { getMateriasEstudiante } from '../Utils/getMateriasEstudiante'

function OffcanvasMenu() {

  const [materias, setMaterias] = useState([])

  const loadMaterias = () => {

    const materiasList = materias.map((materia, key) => {
      const { _id, anio, nombre, jefeCatedra } = materia
      const { nombres, apellidos } = jefeCatedra.infoPersonal

      return (
        <li key={key} className='container' style={{backgroundColor: '#aeaeae'}}>
          <div className="card-body position-relative row">
            <blockquote className="blockquote mb-0">
              {/* Navigate to = _id */}
              <a className='hidden stretched-link ' href='#'></a>
              <p><cite title="Source Title">{anio}</cite> - {nombre}</p>
              <footer className="blockquote-footer">{`${apellidos}, ${nombres}`}</footer>
            </blockquote>
          </div>
        </li>
      )
    })

    return materiasList
  }

  useEffect(() => {

    if (materias.lenght !== 0) {
      getMateriasEstudiante()
        .then((res) => setMaterias(res))
      //dispatch al reducer de materias
    }
  }, [])

  return (
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div>
        <ul className='list-unstyled'>
          <li><a className="item" href="#">Carrera</a></li>
          <li><hr className="divider" /></li>
          {
            materias.length !== 0
              ? loadMaterias()
              : <p>No tenés ninguna materia asignada</p>
          }
          <li><hr className="divider" /></li>
          <li><a className="item" href="#">Editar perfil</a></li>
          <li><a className="item" href="#">Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  )
}

export default OffcanvasMenu