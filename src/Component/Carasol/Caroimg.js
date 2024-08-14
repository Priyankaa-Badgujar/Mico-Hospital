import React from 'react'
import './carasoul.css'

const Caroimg = ({img,name,degree}) => {
  return (
    <>
    <div className='car-con'>
      <img src={img} className='team-img'/>
      <h4>{name}</h4>
      <h4 className='deg'>{degree}</h4>
      <div className='icon'>
      <i class="fa-brands fa-facebook" style={{color:"black"}}></i>
      <i class="fa-brands fa-instagram" style={{color:"black"}}></i>
      <i class="fa-brands fa-twitter" style={{color:"black"}}></i>
      <i class="fa-brands fa-linkedin" style={{color:"black"}}></i>
      </div>
    </div>
   
    </>
  )
}

export default Caroimg
