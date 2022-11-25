import React from 'react'
import { useNavigate } from 'react-router-dom'
//Style
import { useStyles } from 'react-styles-hook'
import { GoPencil } from 'react-icons/go'

function PostCreatorInput() {

  const navigator = useNavigate()

  return (
    <div className='row' style={styles.container} onClick={() => navigator('/anuncio')}>
      <div className='col-10' style={styles.inputContainer}>
        <input style={styles.inputText} className='form-control' type="text" name="crearAnuncio" id="" placeholder='Ecribir anuncio...' />
      </div>
      <button className='col-1 btn' style={styles.button} disabled="disabled"><GoPencil size={30}/></button>
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
    color: '#039805',
  },

})

export default PostCreatorInput