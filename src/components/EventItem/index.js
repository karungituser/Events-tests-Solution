// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEventImage, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEvent = () => {
    onClickEventImage(id)
  }
  const activeImage = isActive ? 'image-url active-image' : 'image-url'

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={activeImage} />
      </button>
      <h1 className="name">{name}</h1>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
