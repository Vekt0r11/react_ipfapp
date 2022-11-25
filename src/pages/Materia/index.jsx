import React, { useState, useEffect } from 'react'
import PostCreatorInput from '../../components/PostCreatorInput'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Anuncios from './Components/Anuncios'
import CursantesTable from './Components/CursantesTable'
import Gestion from './Components/Gestion'

function Materia() {

  const dispatch = useDispatch()
  const location = useLocation()
  const idMateria = location.state.id

  const anuncios = useSelector(state => state.anuncios)
  const materia = useSelector(state => state.materias.filter(materia => materia._id === idMateria)[0])
  const { anio, auxiliar, clases, cuatrimestre, cursantes, jefeCatedra, isActive, nombre } = materia

  const [page, setPage] = useState('Anuncios')

  const handlePageClick = (e) => {
    e.preventDefault()

    setPage(e.target.innerHTML)
  }

  useEffect(() => {



  }, [page])

  return (
    <div className='container d-flex flex-column justify-content-center'>
      <div className='row mt-2 mb-2'>
        <div className='d-flex flex-column'>
          <h3>{`${anio} - ${nombre}`}</h3>
          <h4>{`Profesores: ${jefeCatedra.infoPersonal.apellidos}, ${jefeCatedra.infoPersonal.nombres} - ${auxiliar.infoPersonal.apellidos}, ${auxiliar.infoPersonal.nombres}`}</h4>
          <h5>{`${cuatrimestre}° Cuatrimestre`}</h5>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className="btn border-bottom border-3 rounded-3" onClick={(e) => handlePageClick(e)}>Anuncios</div>
        <div className="btn border-bottom border-3 rounded-3" onClick={(e) => handlePageClick(e)}>Cursantes</div>
        <div className="btn border-bottom border-3 rounded-3" onClick={(e) => handlePageClick(e)}>Gestión</div>
      </div>
      {
        isActive && page === 'Anuncios' &&
        <div className='row justify-content-center'>
          <PostCreatorInput />
        </div>
      }
      <div className='row justify-content-center'>
        {
          page === 'Anuncios' && <Anuncios props={{idMateria, anuncios}} />
        }
        {
          page === 'Cursantes' && <CursantesTable props={{idMateria, cursantes, clases}} />
        }
        {
          page === 'Gestión' && <Gestion props={{}}/>
        }
      </div>
    </div>
  )
}

export default Materia