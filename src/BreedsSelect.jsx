// @ts-check


export const BreedsSelect = (props) => {
  const { breeds,
          selectedBreed,
          setSelectedBreed,
          selectedBreedImgs,
          setSelectedBreedImgs} = props
  const select_breed_url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`
  const onChange = (e) => {
    setSelectedBreed(e.target.value)
  }

  const update_breeds = async () => {
    await fetch(select_breed_url)
      .then(response => response.json())
      .then(selectedBreedImgUrls => setSelectedBreedImgs(selectedBreedImgUrls.message))
  }

  const SelectedBreedImgsUrl = () => {
    return (
      <div className="SelectedDogsImgContainer">
        {selectedBreedImgs.map(
          (url,id) => (
            <img key={id} src={url} />
          )
        )}
      </div>
    )
  }

  return (
    <div>
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
      <SelectedBreedImgsUrl />
    </div>
  )
}

export default BreedsSelect
