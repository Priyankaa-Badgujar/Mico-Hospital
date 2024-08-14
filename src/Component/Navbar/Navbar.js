import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav>
        <input type="checkbox"  id="check"/>
        <label for="check" className="checkbtn">
        <i class="fa-solid fa-bars" style={{color:"white"}}></i>
        </label>
        <label for="" className="logo">MICO</label>
        <ul>
            <li><Link className="an" to="/home">Home</Link></li>
            <li><Link className="an" to="/about">About</Link></li>
            <li><Link className="an" to="/treat">Treatment</Link></li>
            <li><Link className="an" to="/doctor">Doctors</Link></li>
            <li><Link className="an" to="/contact">Contact us</Link></li>
            {/* <li><Link className="an"><i class="fa-solid fa-user" style={{color:"black"}}></i> Login</Link></li>
            <li><Link className="an"><i class="fa-solid fa-user" style={{color:"black"}}></i> Sign up</Link></li> */}
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
