import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useStyles } from 'react-styles-hook'
import { useDispatch } from 'react-redux'
import { resetUserAction } from '../redux/actions/user'
import { IoLogOut, IoMenu } from 'react-icons/io5'

function NavBar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <nav className="d-flex navbar navbar-expand text-light" style={styles.nav}>
      <div style={styles.container}>
        <div className="row">
          <div className='col'>
            <a className="" style={styles.navMenu} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><IoMenu size={40} /></a>
          </div>
          <div className="col mt-2" style={styles.navLogo} onClick={() => navigate('/inicio')}>
            <h4>IPF - Sistema de Gestión Académica</h4>
          </div>
          <div className="col">
            <Link onClick={(e) => dispatch(resetUserAction())} >
              <div className='' style={styles.navLogOut}>
                <IoLogOut size={40} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>

  )
}

const styles = useStyles({
  nav:{
    backgroundColor:'#08171c',
    height:'6vh',
  },
  container: {
    justifyContent: 'space-evenly',
    width: '100%',
  },
  navMenu: {
    marginInline: 15,
    color: '#F3E8D1'
  },
  navLogo: {
    textAlign: 'center',
    color: '#F3E8D1'
  },
  navLogOut: {
    textAlign: 'end',
    color: '#F3E8D1'
  }
})

export default NavBar