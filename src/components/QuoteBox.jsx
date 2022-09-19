import React from 'react'

const QuoteBox = ({ randomQuote, randomColor,getRandomAll}) => {
  const colorObj = {
    color: randomColor
  }
  const backgroundObj = {
    backgroundColor: randomColor
  }

  return (
    <article className='card' style={colorObj}>
      <p className='card__quote'>{randomQuote.quote}</p>
      <h1 className="card__author">{randomQuote.author}</h1>
      <button onClick={getRandomAll} className='card__btn' style={backgroundObj} on>Next</button>
    </article>
  )
}

export default QuoteBox