// @ts-check


export const BreedsSelect = (props) => {
  const { breeds,
          selectedBreed,
          setSelectedBreed,
          selectedBreedImgs,
          setSelectedBreedImgs} = props
  const select_breed_url = `https://dog.ceo/api/breed/${selectedBreed}/images`

  const onChange = (e) => {
    setSelectedBreed(e.target.value)
  }

  const update_breeds = () => {
    fetch(select_breed_url)
      .then(response => response.json())
      .then(selectedBreedImgUrls => setSelectedBreedImgs(selectedBreedImgUrls.message))
  }

  return (
    <div className="dog_breeds_selector_wrapper">
      <p>Breeds List</p>
      <select className='breeds_select'
        value={selectedBreed}
        onChange={onChange}>
        {breeds.map(
          (breed) => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
      <button className="display_button" onClick={update_breeds}>表示</button>
    </div>
  )
}

export default BreedsSelect
