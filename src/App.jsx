import { useState } from 'react'
import './App.css'
import Imagenes from './components/Imagenes'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'
import imagenes from './utils/imagenes'
function App() {

  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

  const firstColor = color[getIndexRandom(color)]
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstImage = imagenes[getIndexRandom(imagenes)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)
  const [randomImage, setRandomImage] = useState(firstImage)
 const getRandomAll = () => {
  setRandomColor(color[getIndexRandom(color)])
  setRandomQuote(quotes[getIndexRandom(quotes)])
  setRandomImage(imagenes[getIndexRandom(imagenes)])
 }
const backgroundObject ={
  backgroundColor: randomColor
}

// console.log(randomQuote)  
  return (
    <div className="App" style={backgroundObject}>
      <Imagenes randomImage={randomImage}/>
      <QuoteBox randomQuote={randomQuote} randomColor={randomColor} getRandomAll={getRandomAll} />
      
    </div>
  )
}

export default App
