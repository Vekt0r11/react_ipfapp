import React from 'react'
import { useStyles } from 'react-styles-hook'

function NavBar() {
  return (
    <nav className="d-flex navbar navbar-expand bg-dark text-light">
      <div style={styles.container}>
        <div className="row">
          <div className='col' style={styles.navMenu}>
            <a className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">*Menu</a>
          </div>
          <div className="col" style={styles.navLogo}>
            <h4>IPF - Sistema de Gestión Académica</h4>
          </div>
          <div className="col" style={styles.navLogOut}>
            <h4>*logOut</h4>
          </div>
        </div>
      </div>
    </nav>

  )
}

const styles = useStyles({
  container: {
    justifyContent: 'space-evenly',
    width: '100%',
  },
  navMenu: {
    marginInline: 15
  },
  navLogo: {
    textAlign: 'center',
  },
  navLogOut: {
    textAlign: 'end'
  }
})

export default NavBar