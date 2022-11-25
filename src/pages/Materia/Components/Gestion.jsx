import React from 'react'
import { useStyles } from 'react-styles-hook'

function Gestion() {
  return (
    <div style={styles.container}>Gestion</div>
  )
}

const styles = useStyles({
  container: {
    height: '60vh',
    width: '100vw'
  }
})

export default Gestion