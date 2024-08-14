import React from 'react'
import head2 from '../../../assests/head2.jpg'
import { NavLink } from 'react-router-dom'
import './home2.css'

const Home2 = () => {
  return (
    <div className='home2-con'>
       <div className='head2'>
        <h1><span className='mico2'>About</span> <span>HOSPITAL</span></h1>
        <p >has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</p>
        <NavLink className='btn3'><button>Read more</button></NavLink>
      </div>
      <div className='head-img2'>
      <img src={head2} alt=''/>
      </div>
    </div>
  )
}

export default Home2
