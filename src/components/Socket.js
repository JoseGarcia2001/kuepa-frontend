import io from 'socket.io-client'

const URL = 'https://kuepa-backend.herokuapp.com'

const Socket = io(URL, {
  transports: ['websocket', 'polling', 'flashsocket']
})

export default Socket
