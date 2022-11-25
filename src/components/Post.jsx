import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
//redux
import { useDispatch, useSelector } from 'react-redux'
//Styles
import { IoChevronForward } from 'react-icons/io5'
import { useStyles } from 'react-styles-hook'
//Utils
import reformatDate from '../Utils/reformatDate'
import delAnuncio from '../Utils/delAnuncio'
import { delAnuncioAction } from '../redux/actions/anuncios'

function Post(props) {

  const navigate = useNavigate()
  const userId = useSelector(state => state.user.id)
  const dispatch = useDispatch()

  const { _id, titulo, descripcion, fecha, autor, materia } = props.anuncio
  const { infoPersonal } = autor
  const { nombres, apellidos } = infoPersonal

  const handleMateriaCLick = ((e, id) => {
    e.preventDefault()

    navigate(
      `/materia/${id}`,
      { state: { id } }
    )
  })

  const handleEdit = ({anuncio}) => {
    navigate('/anuncio',
      { state: { update: anuncio } }
    )
  }

  const handleDelete = async () => {
    return await delAnuncio(_id)
    .then(res => {
      if (!res.errors) {
        dispatch(delAnuncioAction(_id))
      } else {
        console.log(res.errors)
      }
    })
  }

  return (
    <div className="row d-flex justify-content-center mt-5 mb-5" style={styles.container}>
      <div className="">
        <div className="card flex-md-row box-shadow">
          <div className="card-body d-flex flex-column align-items-start">

            <Link onClick={(e) => handleMateriaCLick(e, materia._id)}>
              <div className='d-flex justify-content-center align-content-center text-primary mb-1'>
                <IoChevronForward size={26} />
                <strong className="d-inline-block">
                  {materia.nombre}
                </strong>
              </div>
            </Link>

            <h3 className="mb-4">
              <a className="text-dark text-underline">{titulo}</a>
            </h3>

            <div style={styles.textContainer}>
              <p style={styles.text} className="card-text">{descripcion}</p>
            </div>

            <div className='container-fluid'>
              <div className='row'>
                <div className="col d-flex align-items-center">
                  <img style={styles.img} src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                  <div className='ms-1 justify-content-center'>
                    {`${apellidos}, ${nombres}`}
                  </div>
                </div>
                <div className="col d-flex justify-content-center align-items-center text-muted">
                  {reformatDate(fecha)}
                </div>
                {
                  userId === autor._id
                    ? <div className="col d-flex justify-content-end align-items-center">
                      <button style={styles.editButton}className="btn btn-secondary ms-1 me-1" onClick={() => handleEdit(props)}>Editar</button>
                      <button style={styles.delButton}className="btn ms-1 me-1" onClick={() => handleDelete()}>Eliminar</button>
                    </div>
                    : <div className="col d-flex justify-content-end align-items-center"></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

const styles = useStyles({
  container: {
    // justifyContent: 'center',
    // marginTop: 30,
    // marginBottom: 30,
    // display: 'flex',
    // height:300
  },
  textContainer: {
    padding: 15,
    background: '#eaeaea',
    marginBottom: 10,
    alignItems: 'stretch',
    width: '100%',
  },
  text: {
  },
  bottomInfo: {
    // backgroundColor: 'black'
  },
  img: {
    width: 45,
    height: 45,
    borderRadius: 10
  },
  delButton:{
    color: '#fff',
    backgroundColor: '#cf3c3c'
  },
  editButton:{
    color: '#fff',
    backgroundColor: '#1D3E4E'
  }
})

export default Post