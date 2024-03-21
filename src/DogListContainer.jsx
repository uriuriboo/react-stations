// @ts-check

import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const breedsListUrl = 'https://dog.ceo/api/breeds/list/all'
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('select')
  const [selectedBreedImgs, setSelectedBreedImgs] = useState([])

  useEffect(() => {
    fetch(breedsListUrl)
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
        selectedBreedImgs={selectedBreedImgs}
        setSelectedBreedImgs={setSelectedBreedImgs}
        />
    </div>
  )
}

export default DogListContainer

