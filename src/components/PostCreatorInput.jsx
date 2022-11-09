import React from 'react'
import { useStyles } from 'react-styles-hook'

function PostCreatorInput() {
  return (
    <div className='row' style={styles.container}>
      <div className='col-6' style={styles.inputContainer}>
        <input style={styles.inputText} className='form-control' type="text" name="crearAnuncio" id="" placeholder='Ecribir anuncio...' onClick={() => alert('Redireccionar a createPost')} />
      </div>
      <button className='col-1 btn' style={styles.button} disabled="disabled">Lapiz*</button>
    </div>
  )
}

const styles = useStyles({
  container: {
    justifyContent: 'center',

  },
  inputContainer: {
    marginTop: 30,
    marginBottom: 30,
    padding: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputText: {
    height: 55,

  },
  button: {
    width: 60,
    padding: 0,
  },

})

export default PostCreatorInput