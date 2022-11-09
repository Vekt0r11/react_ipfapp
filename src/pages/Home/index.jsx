import React from 'react'
import { useStyles } from 'react-styles-hook'
import Post from '../../components/Post'
import PostCreatorInput from '../../components/PostCreatorInput'

function Home() {
  return (
    <div className='container-fluid row'>
      <div className='col-3'>

      </div>
      <div className='col-6'>
        <PostCreatorInput />

        <Post/>
        Divisor entre posts
        <Post/>
        Divisor entre posts
        <Post/>
        Divisor entre posts
        <Post/>
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