import React from 'react'
import './home.css'
import Home1 from './Home1'
import Appointment from './Appoin/Appointment'
import Home2 from './Home2.js/Home2'
import Treatment2 from '../Treatment/Treatment2'
import Carasol from '../Carasol/Carasol'
import Partestinomil from '../testinomils/Partestinomil'
import Foot from '../footer/Foot'
import Contact from '../CONTACT/Contact'

const Home = () => {
  return (
    <div className='home-container'>
      <Home1></Home1>
      <Appointment></Appointment>
      <Home2></Home2>
      <Treatment2></Treatment2>
      <Carasol></Carasol>
      <Partestinomil></Partestinomil>
      <Contact></Contact>
    </div>
  )
}

export default Home
