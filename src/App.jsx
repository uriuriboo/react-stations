// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const displayDog = async (e) => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const json_response = await response.json()
    setDogUrl(json_response.message)
    console.log(json_response.message)
  }
  return (
    <div>
      <header>Dogアプリ</header>
      <img src={dogUrl} />
      <form onClick={displayDog}>
      <button type='button'>別の犬を表示</button>
      </form>
    </div>
  )
}
