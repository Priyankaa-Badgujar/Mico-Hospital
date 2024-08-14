// TitleCommentCarousel.jsx
import React, { useState } from 'react';
import './cara.css'; // Create this CSS file
import '../testinomils/testinomil.css'

const Cara = () => {
    const [index, setIndex] = useState(0);
    const slides = [
        {
            name:"Morijorch",
            info:"Default model text 1" ,
            para:" as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." ,
            classi:"tt1"
          },
          {
            name:"Rochak" ,
            info:"Default model text 2",
             para:"use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." ,
            classi:"tt2"
          },{
            name:"Brad Johns",
            info:"Default model text 3" ,
            para:"Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various" ,
            classi:"tt1"
          }
    ];

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="title-comment-carousel">
            <div className="carousel-content">
            <div className='tt1'>
            <div className='testbox'>
            {/* <button className='btn-test'  >1</button> */}
            <div className='box1'>
                <h2>{slides[index].name}</h2>
                <p>{slides[index].info}</p>
                <p>{slides[index].para}</p>
            </div>
            <button className="prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="next" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
        </div>
        {/* <button className='btn-test'>2</button> */}
      </div>
    </div>
    );
};

export default Cara;
