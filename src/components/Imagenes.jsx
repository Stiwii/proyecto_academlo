import React from 'react'

const Imagenes = ({randomImage}) => {
    
        
  return (
    <div className='card__image'>
    <img className='card_i' src={randomImage}></img>
    </div>
  )
}

export default Imagenes