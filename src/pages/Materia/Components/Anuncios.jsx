import Post from '../../../components/Post'

const Anuncios = ({props}) => {

  const {idMateria, anuncios} = props

  return anuncios.map((anuncio, key) => {
    if (anuncio.materia._id === idMateria) {
      return <Post anuncio={anuncio} key={key} />
    }
  })
}

export default Anuncios