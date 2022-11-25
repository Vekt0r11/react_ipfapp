import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { updateMateriasAction } from '../redux/actions/materias'
//Utilities
import { getMateriasEstudiante } from '../Utils/getMateriasEstudiante'
//Components and pages

//Style
import { IoChevronForward, IoCodeWorking } from 'react-icons/io5'
import { useStyles } from 'react-styles-hook'
import { IoMdClose } from 'react-icons/io'


function OffcanvasMenu() {

  const navigate = useNavigate()
  const firstLoadRef = useRef(true)

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const materias = useSelector(state => state.materias)


  const handleCLick = ((e, id) => {
    e.preventDefault()

    navigate(
      `/materia/${id}`,
      { state: { id } }
    )
  })

  const loadMaterias = () => {

    const materiasList = materias.map((materia, key) => {
      const { _id, anio, nombre, jefeCatedra } = materia
      const { nombres, apellidos } = jefeCatedra.infoPersonal

      return (
        <li key={key} className='container' style={{color: '#F3E8D1'}}>
          <div className="card-body position-relative row">
            <Link className='hidden stretched-link ' onClick={(e) => handleCLick(e, _id)} data-bs-dismiss="offcanvas"></Link>
            <div className="col-10">
              <blockquote className="blockquote mb-0">
                <p><cite title="Source Title">{anio}</cite> - {nombre}</p>
                <footer className="blockquote-footer">{`${apellidos}, ${nombres}`}</footer>
              </blockquote>
            </div>
            <div className="col"><IoChevronForward size={25} /></div>
          </div>
        </li>
      )
    })

    return materiasList
  }

  useEffect(() => {

    if (firstLoadRef.current) {
      getMateriasEstudiante(user.id)
        .then((res) => dispatch(updateMateriasAction(res)))
      firstLoadRef.current = false
    }
  }, [])

  return (
    <div 
    className="offcanvas offcanvas-start text-light" 
    style={styles.container}
    data-bs-scroll="true" 
    tabIndex="-1" 
    id="offcanvasWithBothOptions" 
    aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Menu</h5>
        <a style={styles.closeBtn} type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close"><IoMdClose size={35}/></a>
      </div>
      <div>
        <ul className='list-unstyled'>
          <li>
            <div className='ms-3'>
              <Link className='text-decoration-none text-light' onClick={(e) => navigate('/inicio')} data-bs-dismiss="offcanvas"><h5 className="">Inicio</h5></Link>
            </div>
          </li>
          <li><hr className="divider" /></li>
          {
            materias.length > 0
              ? loadMaterias()
              : <p>No tenés ninguna materia asignada, vago</p>
          }
          <li><hr className="divider" /></li>
          <li><h5 className="item ms-3" href="#">Editar perfil</h5></li>
          <li><h5 className="item ms-3" href="#">Cerrar sesión</h5></li>
        </ul>
      </div>
    </div>
  )
}

const styles = useStyles({
  container:{
    backgroundColor: '#08171c'
  },
  closeBtn:{
    color: '#F3E8D1'
  }
})
// ["5E8286","005456","81A7A8","047E29","B6CACB","2A686B","055658","085357","1C4251"]

export default OffcanvasMenu