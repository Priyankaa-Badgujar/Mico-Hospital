import React from 'react'
import './foot.css'
import { Link } from 'react-router-dom';
import post1 from '../../assests/post1.jpg'
import post2 from '../../assests/post2.jpg'

const Foot = () => {
  return (
    <div className='footer'>
      <div className='detail'>
       <h4><i class="fa-solid fa-square"></i> ADDRESS</h4>
        <p><i class="fa-solid fa-location-dot"></i> Location</p>
        <p><i class="fa-solid fa-phone"></i> call +213648995</p>
        <p><i class="fa-regular fa-envelope"></i> mail@mico.com</p>
        <div className='icon'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className='link'>
       <h4><i class="fa-solid fa-square"></i> USEFUL LINK</h4>
        <Link to="/home">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/treat">Treatment</Link><br/>
        <Link to="/doctor">Doctors</Link><br/>
        <Link to="/testi">Testimonil</Link><br/>
        <Link to="/contact">Contact use</Link><br/>
      </div>
      <div className='treat-t'>
       <h4><i class="fa-solid fa-square"></i>LATEST POST</h4>
        <img src={post1}/><br/>
        <p>Normal distribution</p>
        <img src={post2}/><br/>
        <p>Normal distribution</p>
      </div>
    </div>
  )
}

export default Foot
