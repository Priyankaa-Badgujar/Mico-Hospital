import React from 'react'
import { NavLink } from 'react-router-dom'
import './treatment.css';

const Treatment = ({t,h,p}) => {
  return (
    <div className='treat'>
      <img src={t} className='treat-img'/><br/>
      <h4>{h}</h4><br/>
      <p>{p}</p><br/>
      <NavLink className='read'>READ MORE</NavLink>
    </div>
  )
}

export default Treatment
