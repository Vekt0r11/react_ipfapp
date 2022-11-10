import React, { useState, useEffect } from 'react'
import { useStyles } from 'react-styles-hook'
import Post from '../../components/Post'
import PostCreatorInput from '../../components/PostCreatorInput'
import { getAnuncios } from '../../Utils/getAnuncios'

function Home() {

  const [anuncios, setAnuncios] = useState([])

  const loadAnuncios = () => {

    const anunciosList = anuncios.map((element)=>{
      return <Post anuncio={element} />
    })

    return anunciosList
  }


    useEffect(() => {

      if (true) {
        getAnuncios()
          .then((res) => setAnuncios(res))
      }

    }, [])

  return (
    <div className='container-fluid row'>
      <div className='col-3'>

      </div>
      <div className='col-6'>
        <PostCreatorInput />

        {
          anuncios.length > 0
          ? loadAnuncios()
          : null
        }
      </div>
      <div className='col-3'>
        Ver mockup
      </div>
    </div>
  )
}

const styles = useStyles({

})

export default Home