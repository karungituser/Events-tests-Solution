// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {ActiveEventRegistrationStatus} = props

  const renderNoActiveEvent = () => (
    <div className="Events-container">
      <p className="registration-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderRegistered = () => (
    <div className="Events-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-description">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="Events-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yeto-register"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="Events-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="closed-image"
      />
      \
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (ActiveEventRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return renderYetToRegister()
      case registrationStatus.registered:
        return renderRegistered()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEvent()
    }
  }

  return (
    <div className="registration-status-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
