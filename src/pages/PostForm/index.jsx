import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { useStyles } from 'react-styles-hook'
import { updateAnunciosAction } from '../../redux/actions/anuncios'
import postAnuncio from './Utils/postAnuncio'

function PostForm() {

  const navigate = useNavigate()
  const location = useLocation()
  const { state } = location

  const dispatch = useDispatch()
  const materias = useSelector(state => state.materias)
  const user = useSelector(state => state.user)

  const [anuncio, setAnuncio] = useState({
    _id: state ? state.update._id : '',
    autor: state ? state.update.autor._id : user.id,
    tipo: 'materia',
    materia: state ? state.update.materia._id : ''
  })

  const loadMaterias = () => {
    return materias.map((materia, key) => {
      const { nombre, _id } = materia
      return <option value={_id} key={key}>{nombre}</option>
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setAnuncio({
      ...anuncio,
      [name]: value
    })
  }

  const handleSubmit = async () => {

    // navigate('/inicio', { state: { prevPath: location.pathname } })
    return await postAnuncio(anuncio, state ? 'PUT' : 'POST')
      .then(res => {
        if (!res.errors) {
          navigate('/inicio', { state: { prevPath: location.pathname } })
          // !state ? dispatch(updateAnunciosAction([anuncio])) : null
        } else {
          console.log(res.errors)
        }
      })
  }

  useEffect(() => {

  }, [])

  return (
    <div className='d-flex justify-content-start flex-column mt-5' style={styles.container}>
      <div className='col-5 align-self-center'>
        <div className="form-control">
          <div className='col-6 align-self-center mb-4 ms-2 mt-2'>
            <select className='form-select' name="materia" placeholder='Selecciona una materia' onChange={e => handleChange(e)} disabled={state}>
              <option value="" defaultValue hidden>{state ? state.update.materia.nombre : 'Selecciona una materia'}</option>
              {
                !state ? loadMaterias() : null
              }
            </select>
          </div>
          <div className='mb-2 ms-2 me-2'>
            <input
              className='form-control'
              name='titulo'
              type="text"
              placeholder='Titulo'
              onChange={e => handleChange(e)}
              defaultValue={state ? state.update.titulo : null} />
          </div>
          <div className='mb-4 ms-2 me-2'>
            <textarea
              className='form-control'
              name='descripcion'
              type="text"
              placeholder='Descricpion'
              rows={8}
              onChange={e => handleChange(e)}
              defaultValue={state ? state.update.descripcion : null} />
          </div>
          <div className='d-flex justify-content-end'>
            <button type='button' className='btn btn-primary mb-2 me-2' onClick={() => handleSubmit()}>{state ? 'Actualizar' : 'Publicar'}</button>
          </div>
        </div>
      </div>
      <p className='d-flex justify-content-center text-secondary'>Los anuncios que se realicen están sujetos a las Normas de la Comunidad.</p>
    </div>
  )
}

const styles = useStyles({
  container: {
    height: '92vh',
    width: '100vw'
  },
  textarea: {
    backgroundColor: '#eaeaea'
  }
})

export default PostForm