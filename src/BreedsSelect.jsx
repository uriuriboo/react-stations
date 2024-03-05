// @ts-check


export const BreedsSelect = (props) => {
  const {breeds, selectedBreed, setSelectedBreed} = props
  const onChange = (e) => {
    setSelectedBreed(e.target.value)
  }
  return (
    <div>
      <div className="dog_breeds_selecter">
      <p>犬の種類を選択</p>
      <select value={selectedBreed} onChange={onChange}>
        {breeds.map(
          (breed) => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
      </div>
    </div>
  )
}

export default BreedsSelect
