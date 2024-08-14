import React from 'react'
import { NavLink } from 'react-router-dom'
import head1 from '../../assests/head1.jpg'
import dots from '../../assests/dots.png'
import './home1.css'

const Home1 = () => {
  return (
    <div className='home1-con'>
      <div className='head'>
        <h1><span className='mico'>MICO</span> <span>HOSPITAL</span></h1>
        <p >when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
        <NavLink className='btn1'><button>Contact us</button></NavLink>
      </div>
      <div className='head-img'>
      <img src={head1} alt=''/>
      </div>
    </div>
  )
}

export default Home1
