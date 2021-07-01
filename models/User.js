/* eslint-disable no-useless-escape */
const { Schema, model } = require('mongoose')

const userSchema = Schema({
  user: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true }
})

// Delete password on response
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.password
  }
})

const User = model('User', userSchema)

module.exports = User
