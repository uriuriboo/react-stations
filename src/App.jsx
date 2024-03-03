// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');

  const displayDog = (e) => {
    setDogUrl("https://images.dog.ceo/breeds/entlebucher/n02108000_824.jpg")
    // console.log(dogUrl["message"])
    // console.log(dogUrl)
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
