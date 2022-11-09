import React from 'react'
import { useStyles } from 'react-styles-hook'

function Post() {
  return (
    <div className="row" style={styles.postContainer}>
      <div className="col">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className='card-body flex-auto d-none d-md-block' style={{ width: '180px', height: '250px' }}>
            materia/carrera/autor
          </div>
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">World</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="#">Featured post</a>
            </h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#">Continue reading</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = useStyles({
  postContainer: {
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
})

export default Post