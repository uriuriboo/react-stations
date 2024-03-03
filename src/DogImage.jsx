// @ts-check

// import { Description } from './Description' 
export const DogImage = ({ imageUrl }) => {
  return (
    <div className='img_wrapper'>
      <img className='dog_img' src={imageUrl} />
    </div>
  )
}

export default DogImage
