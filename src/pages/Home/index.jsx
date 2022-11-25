import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from 'react-styles-hook'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { updateAnunciosAction } from '../../redux/actions/anuncios'
//Utilities
import { getAnuncios } from '../../Utils/getAnuncios'
//Components and pages
import PostCreatorInput from '../../components/PostCreatorInput'
import Post from '../../components/Post'
import { useLocation } from 'react-router-dom'

function Home() {

  const firstLoadRef = useRef(true)
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const anuncios = useSelector(state => state.anuncios)

  const location = useLocation()
  const [reloaded, setReloaded] = useState(false)

  const loadAnuncios = (anuncios) => {
    return anuncios.map((element, key) => {
      return <Post anuncio={element} key={key} />
    })
  }

  useEffect(() => {

    if (firstLoadRef.current) {
      getAnuncios(user.id)
        .then(res => dispatch(updateAnunciosAction(res)))
      firstLoadRef.current = false
      setReloaded(true)
    }
  }, [anuncios, reloaded])

  return (
    <div className='container-fluid row'>
      <div className='col-3'>

      </div>
      <div className='col-6'>
        <PostCreatorInput />

        {
          location.state && !reloaded
            ? <div className='d-flex justify-content-center' onClick={async () => await getAnuncios(user.id).then(res => dispatch(updateAnunciosAction(res)))}>
              <span style={styles.reloadPill} className="badge rounded-pill p-2" onClick={() => setReloaded(true)}>Actualizar anuncios</span>
            </div>
            : null
        }

        {
          anuncios.length > 0
            ? loadAnuncios(anuncios)
            : null
        }
      </div>
      <div className='col-3'>

      </div>
    </div>
  )
}

const styles = useStyles({
  reloadPill: {
    backgroundColor: '#08171c'
  }
})

export default Home