import React, { useEffect, useState } from 'react'
import './testinomil.css'

const Testinomil = ({}) => {
   
    const [show,setShow]=useState(true)

    // const cmt = [{
    //   name:"Morijorch",
    //   info:"Default model text" ,
    //   para:"Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." ,
    //   classi:"tt1"
    // },
    // {
    //   name:"Rochak" ,
    //   info:"Default model text",
    //    para:"Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." ,
    //   classi:"tt2"
    // }]

    const [data,setData]=useState([{
      name:"Morijorch",
      info:"Default model text" ,
      para:"Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." ,
      classi:"tt1"
    },
    {
      name:"Rochak" ,
      info:"Default model text",
       para:"Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." ,
      classi:"tt2"
    }])
      
      const handleclick=(e)=>{
        setData( {
             name:"Rochak" ,
             info:"Default model text",
              para:"Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." ,
             classi:"tt2"
           })
      }
  
      const doubleclick=(e)=>{
        setData({
          name:"Brad Johns",
          info:"Default model text" ,
          para:"Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various" ,
          classi:"tt1"
        })
      }
  

  return (
    <div className='tt1'>
      <div className='testbox'>
        <button className='btn-test'  onClick={handleclick}>1</button>
        <div className='box1'>
            <h4 style={{color:"#00c6a9"}}>{data[0].name}</h4>
            <p>{data[0].info}</p>
            <p>{data[0].para}</p>
        </div>
        <button className='btn-test' onClick={doubleclick} >2</button>
      </div>
    </div>
  )
}

export default Testinomil
