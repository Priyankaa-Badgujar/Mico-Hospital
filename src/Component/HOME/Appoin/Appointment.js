import React from 'react'
import './appoin.css'

const Appointment = () => {
  return (
    <div className='appon-from'>
    <div className='appoin-form'>
     <h3>Book <span className='ap'>Appointment</span></h3><br/><br/>
     <form>
        <div className='sec1'>
        <div className='line1'>
        <label>Patient Name</label>
        <br/>
        <input/>
        </div>
        <div className='line2'>
        <label>Doctor's Name</label><br/>
        <select><option>Dr swara</option><option>Dr meena</option>Dr roshan<option>Dr dashore</option><option>dr Niranjan</option><option>Dr Shelly</option><option>Dr Reena</option></select>
        </div>    
        <div className='line3'>
         <label>Department's Name</label><br/>
         <select><option>OPD</option><option>Specialization</option></select>
         </div>
         </div>
        <div className='sec2'>
        <div className='line4'>
        <label>Phone Number</label><br/>
        <input/>
        </div>
        <div className='line5'>
        <label>Symtoms</label><br/>
        <input/>
        </div>
        <div className='line6'>
        <label>Choose Date</label><br/>
        <input type='date'/>
        </div>
        </div><br/><br/>
        <button className='btn2'>Submit Now</button>
     </form>
    </div>
    </div>
  )
}

export default Appointment
