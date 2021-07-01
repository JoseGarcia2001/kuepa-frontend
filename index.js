require('dotenv').config()

const cors = require('cors')
const http = require('http')
const socketIo = require('socket.io')

const express = require('express')
const app = express()
const server = http.createServer(app)

const io = socketIo(server)

io.on('connection', socket => {
  socket.on('connected', () => {
    console.log('User connected')
  })

  socket.on('message', (messageInfo) => {
    io.emit('messages', messageInfo)
  })

  // socket.on('disconnect', () => {
  //   io.emit('message', {
  //     server: 'server',
  //     msg: 'Disconnected'
  //   })
  // })
})

// Mongo Connection
require('./mongo')

app.use(cors())
app.use(express.json())

const manageError = require('./middlewares/manageError')
const manage404 = require('./middlewares/manage404')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

//  End points
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

// Manage errors and 404
app.use(manageError)
app.use(manage404)

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}`)
})
