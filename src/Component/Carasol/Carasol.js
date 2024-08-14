import React from 'react'
import team1 from '../../assests/team1.jpg'
import team2 from '../../assests/team2.jpg'
import team3 from '../../assests/team3.jpg'
import t4 from '../../assests/t4.png'
import Carousel from 'react-bootstrap/Carousel';
import Caroimg from './Caroimg'
import './car.css'



const Carasol = () => {
   
  return (
    <>
    <h1 className='outdoct' style={{padding:'0px 0 0 0'}}>Our <span style={{color:'#00c6a9'}}>Doctor's</span></h1>
    <div className='carblue'>
    <div className='caracon'>
    <button><i class="fa-solid fa-less-than" onClick={Caroimg} style={{transition:'ease-in'}}></i></button>
        <Caroimg img={team1} name="Shruti" degree="MBBS"></Caroimg>
        <Caroimg img={team2} name="Rhea" degree="BHMS"></Caroimg>
        <Caroimg img={team3} name="Tom" degree="MD"></Caroimg>
    <button onClick={Caroimg}> <i class="fa-solid fa-greater-than"></i></button>
    </div>
    </div>
    </>
   
  )
}

export default Carasol
