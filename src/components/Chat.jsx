/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import getCurrentTime from '../utils/getDate'
import sendArrow from '../assets/media/send-arrow.svg'
import Socket from './Socket'
import Message from './Message'
import '../assets/styles/styles.css'

const Chat = ({ name, role }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    Socket.emit('connected')
  }, [])

  useEffect(() => {
    Socket.on('messages', message => {
      setMessages([...messages, message])
    })

    return () => { Socket.off() }
  }, [messages])

  const handleSubmit = (event) => {
    event.preventDefault()

    Socket.emit('message', {
      message,
      name,
      date: getCurrentTime(),
      role: role
    })

    setMessage('')
  }

  return (
    <section className="chat">
      <ul className="chat-messages">
        {
          messages.map(({ name, role, date, message }, i) =>
            <Message
              key={i}
              name={name}
              role={role}
              date={date}
              message={message}
            />
          )
        }
      </ul>
      <form
        onSubmit={handleSubmit}
        className="chat-form">
        <div className="chat-input">
          <input
            value={message}
            onChange={({ target }) => setMessage(target.value)}
            className="input"
            autoComplete="off"
            placeholder="Comparte algo.."
          />
          <button>
            <img
              width="20px"
              src={sendArrow}
              alt="enviar"
            />
          </button>
        </div>
      </form>
    </section>
  )
}

export default Chat
