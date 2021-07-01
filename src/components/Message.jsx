import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ name, date, role, message }) => {
  const classRole = role === 'moderador' ? 'role moderator' : 'role'

  return (
      <li>
        <div className="message-info">
          <p className="name">{name}</p>
          <p className="date">{date}</p>
          <p className={classRole}>{role}</p>
        </div>
        <p className="message-data">{message}</p>
      </li>
  )
}

Message.propTypes = {
  name: PropTypes.string,
  date: PropTypes.any,
  role: PropTypes.string,
  message: PropTypes.string
}

export default Message
