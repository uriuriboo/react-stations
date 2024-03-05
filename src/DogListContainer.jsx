// @ts-check

import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const breeds_list_url = 'https://dog.ceo/api/breeds/list/all'
  const [selectedBreed, setSelectedBreed] = useState('dog')

  useEffect(() => {
    fetch(breeds_list_url)
      .then(response => response.json())
      .then(dogs => {
        const array = []
        for (let i in dogs.message)
          array.push(i)
        setBreeds(array)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
  }, [])
  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
        />
    </div>
  )
}

export default DogListContainer

