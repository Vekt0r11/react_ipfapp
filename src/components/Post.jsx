import React from 'react'
import { useStyles } from 'react-styles-hook'

function Post(props) {

  const {titulo, descripcion, fecha, autor, materia} = props.anuncio
  
  return (
    <div className="row" style={styles.container}>
      <div className="col">
        <div className="card flex-md-row box-shadow">
          <div className="card-body d-flex flex-column align-items-start">

            <strong className="d-inline-block mb-1 text-primary">{materia}</strong>

            <h3 className="mb-4">
              <a className="text-dark" href="#">{titulo}</a>
            </h3>

            <div style={styles.textContainer}>
              <p style={styles.text} className="card-text">{descripcion}</p>
            </div>

            <div className='container-fluid'>
              <div className='row' style={styles.bottomInfo}>
                <div className="col">
                  <img style={styles.img} src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                  {autor}
                </div>
                <div className="col d-flex justify-content-center align-items-center text-muted">
                  {fecha}
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                  <a href="">Continuar leyendo...</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = useStyles({
  container: {
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    display: 'flex',
    height:'25%'
  },
  textContainer: {
    padding: 15,
    background: '#eaeaea',
    marginBottom: 10,
    alignItems:'stretch',
    width:'100%',
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
  }
})

export default Post