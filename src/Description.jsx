// @ts-check

import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [image_url, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg');
  const displayDog = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const json_response = await response.json()
    setDogUrl(json_response.message)
    console.log(json_response.message)
  }

  return (
    <div>
      <DogImage imageUrl={image_url}/>
      <form className='dog_form' >
        <button type='button' onClick={displayDog}>別の犬を表示</button>
      </form>
    </div>
  )
}

export default Description
