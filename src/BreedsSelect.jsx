// @ts-check


export const BreedsSelect = (props) => {
  const { breeds,
          selectedBreed,
          setSelectedBreed,
          selectedBreedImgs,
          setSelectedBreedImgs} = props
  const select_breed_url = `https://dog.ceo/api/breed/${selectedBreed}/images/12`

  const onChange = (e) => {
    setSelectedBreed(e.target.value)
  }
  // 同期非同期処理
  const update_breeds = () => {
    fetch(select_breed_url)
      .then(response => response.json())
      .then(selectedBreedImgUrls => setSelectedBreedImgs(selectedBreedImgUrls.message))
  }

  const SelectedBreedImgsUrl = (props) => {
    const {SeletedDogUrls} = props
    return (
      <div className="SelectedDogsImgContainer">
        ${SelectedBreedImgsUrl.map(
          (url,id) => (
            <img key={id} src={url} />
          )
        )}
      </div>
    )
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
