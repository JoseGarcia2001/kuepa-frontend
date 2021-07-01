import io from 'socket.io-client'

const Socket = io('http://localhost:3001', {
  transports: ['websocket', 'polling', 'flashsocket']
})

export default Socket
