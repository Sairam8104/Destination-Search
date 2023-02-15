// Write your code here
import './index.css'

const Destinations = props => {
  const {destinationPlaces} = props
  const {name, imgUrl} = destinationPlaces
  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} className="image-size" />
      <p className="title-name">{name}</p>
    </li>
  )
}

export default Destinations
