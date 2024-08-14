import React from 'react'
import Treatment from './Treatment'
import t1 from '../../assests/t1.png'
import t2 from '../../assests/t2.png'
import t3 from '../../assests/t3.png'
import t4 from '../../assests/t4.png'
import './treat.css'



const Treatment2 = () => {
  return (
   <>
    <h1 className='ourtreat'>Our <span style={{color:'#00c6a9'}}>Treatment's</span></h1>
   <div className='treat-con'>
   <Treatment t={t1} h='Nephrologist Care' p="alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything"></Treatment>
   <Treatment t={t2} h='Eye Care' p="alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything"></Treatment>
   <Treatment t={t3} h='Pediatrician Clinic' p="alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything"></Treatment>
   <Treatment t={t4} h='Parental Care' p="alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything"></Treatment>
   </div>
 </>
  )
}

export default Treatment2
